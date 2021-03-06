<?php
/**
 * Metaboxes: URI Field Metabox.
 *
 * @since      3.0.0
 * @package    Wordlift
 * @subpackage Wordlift/admin/WL_Metabox
 */

/**
 * Define the {@link WL_Metabox_Field_uri} class.
 *
 * @since      3.0.0
 * @package    Wordlift
 * @subpackage Wordlift/admin/WL_Metabox
 */
class WL_Metabox_Field_uri extends WL_Metabox_Field {

	/**
	 * Only accept URIs or local entity IDs.
	 * Build new entity if the user inputted a name that is not present in DB.
	 *
	 * @param mixed $value The value to sanitize.
	 *
	 * @return int|mixed|WP_Error
	 */
	public function sanitize_data_filter( $value ) {

		if ( empty( $value ) ) {
			return null;
		}

		// Check that the inserted URI, ID or name does not point to a saved
		// entity or when the editor types a string in the input box, we try to
		// find an entity with that title and, if not found, we create that entity.
		$absent_from_db = is_numeric( $value )
			? is_null( get_post( $value ) )
			: ! $this->exists( $value );

		// Is it an URI?
		$name_is_uri = strpos( $value, 'http' ) === 0;

		// We create a new entity only if the entity is not present in the DB.
		// In the case of an external uri, we just save the uri.
		if ( $absent_from_db && ! $name_is_uri ) {

			// ...we create a new entity!
			$new_entity_id = wp_insert_post( array(
				'post_status' => 'publish',
				'post_type'   => Wordlift_Entity_Service::TYPE_NAME,
				'post_title'  => $value,
			) );

			$type = 'http://schema.org/' . ( isset( $this->expected_uri_type ) ? $this->expected_uri_type[0] : 'Thing' );

			wl_set_entity_main_type( $new_entity_id, $type );

			// Build uri for this entity.
			$new_uri = wl_build_entity_uri( $new_entity_id );
			wl_set_entity_uri( $new_entity_id, $new_uri );

			Wordlift_Linked_Data_Service::get_instance()->push( $new_entity_id );

			// Update the value that will be saved as meta.
			$value = $new_entity_id;
		}

		return $value;
	}

	/**
	 * Check whether an entity exists given a value.
	 *
	 * @since 3.15.0
	 *
	 * @param string $value An entity URI or a title string..
	 *
	 * @return bool True if the entity exists otherwise false.
	 */
	private function exists( $value ) {

		// When the editor types a string in the input box, we try to find
		// an entity with that title and, if not found, we create that entity.
		$entity_service = Wordlift_Entity_Service::get_instance();

		// Try looking for an entity by URI.
		$found_by_uri = null !== $entity_service->get_entity_post_by_uri( $value );

		// Return true if found.
		if ( $found_by_uri ) {
			$this->log->debug( "Found entity for $value." );

			return true;
		}

		// Try looking for an entity by title, get any potential candidate.
		$candidate = get_page_by_title( $value, OBJECT, Wordlift_Entity_Service::valid_entity_post_types() );

		// If a candidate has been found and it's an entity.
		return null !== $candidate && $entity_service->is_entity( $candidate->ID );
	}

	/**
	 * @inheritdoc
	 */
	public function html_wrapper_open() {

		// The containing <div> contains info on cardinality and expected types.
		$html = "<div class='wl-field' data-cardinality='$this->cardinality'";

		if ( isset( $this->expected_uri_type ) && ! is_null( $this->expected_uri_type ) ) {

			if ( is_array( $this->expected_uri_type ) ) {
				$html .= " data-expected-types='" . implode( ',', $this->expected_uri_type ) . "'";
			} else {
				$html .= " data-expected-types='$this->expected_uri_type'";
			}
		}

		$html .= '>';

		return $html;
	}

	/**
	 * @inheritdoc
	 */
	public function html_input( $default_entity_identifier ) {

		if ( empty( $default_entity_identifier ) ) {
			$entity = null;
		} elseif ( is_numeric( $default_entity_identifier ) ) {
			$entity = get_post( $default_entity_identifier );
		} else {
			// @todo: we cannot be so sure this is a URI.
			// It is an URI
			$entity = Wordlift_Entity_Service
				::get_instance()
				->get_entity_post_by_uri( $default_entity_identifier );
		}

		if ( ! is_null( $entity ) ) {
			$label = $entity->post_title;
			$value = $entity->ID;
		} else {
			// No ID and no internal uri. Just leave as is.
			$label = $default_entity_identifier;
			$value = $default_entity_identifier;
		}

		// Write saved value in page
		// The <input> tags host the meta value.
		// The visible <input> has the human readable value (i.e. entity name or uri)
		// and is accompained by an hidden <input> tag, passed to the server,
		// that contains the raw value (i.e. the uri or entity id).
		$html = <<<EOF
			<div class="wl-input-wrapper wl-autocomplete-wrapper">
				<input type="text" class="$this->meta_name wl-autocomplete" value="$label" style="width:88%" />
				<input type="hidden" class="$this->meta_name" name="wl_metaboxes[$this->meta_name][]" value="$value" />
				<button class="button wl-remove-input wl-button" type="button">Remove</button>
				<div class="wl-input-notice"></div>
			</div>
EOF;

		return $html;
	}

}
