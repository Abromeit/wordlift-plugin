<?php
require_once 'functions.php';

/**
 * Class PageTest
 */
class PageTest extends Wordlift_Unit_Test_Case {

	/**
	 * Set up the test.
	 */
	function setUp() {
		parent::setUp();

		// We don't need to check the remote Linked Data store.
		Wordlift_Unit_Test_Case::turn_off_entity_push();;

		// Configure WordPress with the test settings.
		wl_configure_wordpress_test();

		// Reset data on the remote dataset.
//		rl_empty_dataset();

		// Check that the dataset is empty.
//        $this->assertEquals( array(
//            'subjects'   => 0,
//            'predicates' => 0,
//            'objects'    => 0
//        ), rl_count_triples() );

		// Empty the blog.
		wl_empty_blog();

		// Check that entities and posts have been deleted.
		$this->assertEquals( 0, count( get_posts( array(
			'posts_per_page' => - 1,
			'post_type'      => array(
				'post',
				'page',
				'entity',
			),
			'post_status'    => 'any',
		) ) ) );

	}

	function testCreatePage() {
	}

}
