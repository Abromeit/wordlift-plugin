!function(t){function c(n){if(d[n])return d[n].exports;var e=d[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}var d={};return c.m=t,c.c=d,c.i=function(t){return t},c.d=function(t,d,n){c.o(t,d)||Object.defineProperty(t,d,{configurable:!1,enumerable:!0,get:n})},c.n=function(t){var d=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(d,"a",d),d},c.o=function(t,c){return Object.prototype.hasOwnProperty.call(t,c)},c.p="",c(c.s=12)}({0:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = check;\n/**\n * Check for duplicate titles.\n *\n * @since 3.10.0\n *\n * @param {Object} $ A jQuery instance.\n * @param {Object} ajax A `wp.ajax` class used to perform `post` requests to `admin-ajax.php`.\n * @param {String} title The title to check for duplicates.\n * @param {Number} postId The current post id, excluded from the duplicates results.\n * @param {String} message The error message to display in case there are duplicates.\n * @param {Function} callback A callback function to call to deliver the results.\n */\n\nfunction check($, ajax, title, postId, message, callback) {\n\t// Use `wp.ajax` to post a request to find an existing entity with the specified title.\n\tajax.post('entity_by_title', { title: title }).done(function (response) {\n\t\t// Prepare the html code to show in the error div.\n\t\tvar html = $.map(response.results, function (item) {\n\t\t\t// If the item is the current post, ignore it.\n\t\t\tif (item.id === postId) {\n\t\t\t\treturn '';\n\t\t\t}\n\n\t\t\t// Create the edit link.\n\t\t\tvar editLink = response.edit_link.replace('%d', item.id);\n\n\t\t\t// Return the html code.\n\t\t\treturn message + '<a target=\"_blank\" href=\"' + editLink + '\">' + item.title + '</a><br />';\n\t\t}).join(''); // Join the html codes together.\n\n\t\t// Call the callback function.\n\t\tcallback(html);\n\t});\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYWRtaW4vanMvbW9kdWxlcy9jaGVjay5qcz8wOTc5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2sgZm9yIGR1cGxpY2F0ZSB0aXRsZXMuXG4gKlxuICogQHNpbmNlIDMuMTAuMFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSAkIEEgalF1ZXJ5IGluc3RhbmNlLlxuICogQHBhcmFtIHtPYmplY3R9IGFqYXggQSBgd3AuYWpheGAgY2xhc3MgdXNlZCB0byBwZXJmb3JtIGBwb3N0YCByZXF1ZXN0cyB0byBgYWRtaW4tYWpheC5waHBgLlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIFRoZSB0aXRsZSB0byBjaGVjayBmb3IgZHVwbGljYXRlcy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBwb3N0SWQgVGhlIGN1cnJlbnQgcG9zdCBpZCwgZXhjbHVkZWQgZnJvbSB0aGUgZHVwbGljYXRlcyByZXN1bHRzLlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiBjYXNlIHRoZXJlIGFyZSBkdXBsaWNhdGVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHRvIGRlbGl2ZXIgdGhlIHJlc3VsdHMuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2soICQsIGFqYXgsIHRpdGxlLCBwb3N0SWQsIG1lc3NhZ2UsIGNhbGxiYWNrICkge1xuXHQvLyBVc2UgYHdwLmFqYXhgIHRvIHBvc3QgYSByZXF1ZXN0IHRvIGZpbmQgYW4gZXhpc3RpbmcgZW50aXR5IHdpdGggdGhlIHNwZWNpZmllZCB0aXRsZS5cblx0YWpheC5wb3N0KCAnZW50aXR5X2J5X3RpdGxlJywgeyB0aXRsZTogdGl0bGUgfSApLmRvbmUoIGZ1bmN0aW9uKCByZXNwb25zZSApIHtcblx0XHQvLyBQcmVwYXJlIHRoZSBodG1sIGNvZGUgdG8gc2hvdyBpbiB0aGUgZXJyb3IgZGl2LlxuXHRcdGNvbnN0IGh0bWwgPSAkLm1hcCggcmVzcG9uc2UucmVzdWx0cywgZnVuY3Rpb24oIGl0ZW0gKSB7XG5cdFx0XHQvLyBJZiB0aGUgaXRlbSBpcyB0aGUgY3VycmVudCBwb3N0LCBpZ25vcmUgaXQuXG5cdFx0XHRpZiAoIGl0ZW0uaWQgPT09IHBvc3RJZCApIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDcmVhdGUgdGhlIGVkaXQgbGluay5cblx0XHRcdGNvbnN0IGVkaXRMaW5rID0gcmVzcG9uc2UuZWRpdF9saW5rLnJlcGxhY2UoICclZCcsIGl0ZW0uaWQgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHRoZSBodG1sIGNvZGUuXG5cdFx0XHRyZXR1cm4gbWVzc2FnZSArICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIGVkaXRMaW5rICsgJ1wiPicgK1xuXHRcdFx0XHQgICBpdGVtLnRpdGxlICsgJzwvYT48YnIgLz4nO1xuXHRcdH0gKS5qb2luKCAnJyApOyAvLyBKb2luIHRoZSBodG1sIGNvZGVzIHRvZ2V0aGVyLlxuXG5cdFx0Ly8gQ2FsbCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdFx0Y2FsbGJhY2soIGh0bWwgKTtcblx0fSApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hZG1pbi9qcy9tb2R1bGVzL2NoZWNrLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==")},1:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = delay;\n/**\n * Delay a function call by half a second.\n *\n * Any function can be delayed using `delay`. The timeout for the call is bound\n * to the provided element. If another function call is delayed on the same\n * element, any previous timeout is cancelled.\n *\n * This function is used to validate in real-time inputs when the user presses a\n * key, but allowing the user to press more keys (hence the delay).\n *\n * @since 3.9.0\n *\n * @param {Object} $elem A jQuery element reference which will hold the timeout\n *                       reference.\n * @param {Function} fn The function to call.\n * @param {...} args Parameters to pass to the callback.\n */\n\nfunction delay($elem, fn) {\n  // Clear a validation timeout.\n  clearTimeout($elem.data('timeout'));\n\n  // Validate the key, after a delay, so that another key is pressed, this\n  // validation is cancelled.\n\n  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  $elem.data('timeout', setTimeout.apply(undefined, [fn, 500].concat(args)));\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYWRtaW4vanMvbW9kdWxlcy9kZWxheS5qcz8yMjVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGVsYXkgYSBmdW5jdGlvbiBjYWxsIGJ5IGhhbGYgYSBzZWNvbmQuXG4gKlxuICogQW55IGZ1bmN0aW9uIGNhbiBiZSBkZWxheWVkIHVzaW5nIGBkZWxheWAuIFRoZSB0aW1lb3V0IGZvciB0aGUgY2FsbCBpcyBib3VuZFxuICogdG8gdGhlIHByb3ZpZGVkIGVsZW1lbnQuIElmIGFub3RoZXIgZnVuY3Rpb24gY2FsbCBpcyBkZWxheWVkIG9uIHRoZSBzYW1lXG4gKiBlbGVtZW50LCBhbnkgcHJldmlvdXMgdGltZW91dCBpcyBjYW5jZWxsZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHZhbGlkYXRlIGluIHJlYWwtdGltZSBpbnB1dHMgd2hlbiB0aGUgdXNlciBwcmVzc2VzIGFcbiAqIGtleSwgYnV0IGFsbG93aW5nIHRoZSB1c2VyIHRvIHByZXNzIG1vcmUga2V5cyAoaGVuY2UgdGhlIGRlbGF5KS5cbiAqXG4gKiBAc2luY2UgMy45LjBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gJGVsZW0gQSBqUXVlcnkgZWxlbWVudCByZWZlcmVuY2Ugd2hpY2ggd2lsbCBob2xkIHRoZSB0aW1lb3V0XG4gKiAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwuXG4gKiBAcGFyYW0gey4uLn0gYXJncyBQYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGF5KCAkZWxlbSwgZm4sIC4uLmFyZ3MgKSB7XG5cdC8vIENsZWFyIGEgdmFsaWRhdGlvbiB0aW1lb3V0LlxuXHRjbGVhclRpbWVvdXQoICRlbGVtLmRhdGEoICd0aW1lb3V0JyApICk7XG5cblx0Ly8gVmFsaWRhdGUgdGhlIGtleSwgYWZ0ZXIgYSBkZWxheSwgc28gdGhhdCBhbm90aGVyIGtleSBpcyBwcmVzc2VkLCB0aGlzXG5cdC8vIHZhbGlkYXRpb24gaXMgY2FuY2VsbGVkLlxuXHQkZWxlbS5kYXRhKCAndGltZW91dCcsIHNldFRpbWVvdXQoIGZuLCA1MDAsIC4uLmFyZ3MgKSApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hZG1pbi9qcy9tb2R1bGVzL2RlbGF5LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQ0E7QUFLQTs7Iiwic291cmNlUm9vdCI6IiJ9")},12:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_wordlift__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_delay__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_check__ = __webpack_require__(0);\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\n * Define our global hooks.\n *\n * @since 3.0.0\n */\n\n/**\n * Internal dependencies\n */\n// eslint-disable-next-line no-unused-vars\n\n\n\n\n(function ($) {\n\t/**\n  * Execute when the document is ready.\n  *\n  * @since 3.1.0\n  */\n\t$(function () {\n\t\t// The Entity Types Taxonomy is exclusive, one cannot choose more\n\t\t// than a type. Therefore from the PHP code we provide a Walker\n\t\t// that changes checkboxes into radios. However the quickedit on the\n\t\t// client side is applied only to checkboxes, so we override the\n\t\t// function here to apply the selection also to radios.\n\n\t\t// Do not hook, if we're not on a page with the inlineEditPost.\n\t\tif ('undefined' === typeof inlineEditPost || null === inlineEditPost) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Create a reference to the original function.\n\t\tvar fnEdit = inlineEditPost.edit;\n\n\t\t// Override the edit function.\n\t\tinlineEditPost.edit = function (id) {\n\t\t\t// Call the original function.\n\t\t\tfnEdit.apply(this, arguments);\n\n\t\t\t// Get the id (this is a copy of what happens in the original\n\t\t\t// edit function).\n\t\t\tif ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {\n\t\t\t\tid = this.getId(id);\n\t\t\t}\n\n\t\t\t// Get a reference to the row data (holding the post data) and\n\t\t\t// to the newly displayed inline edit row.\n\t\t\tvar rowData = $('#inline_' + id);\n\t\t\tvar editRow = $('#edit-' + id);\n\n\t\t\t// Select the terms for the taxonomy (this is a copy of the\n\t\t\t// original lines in the edit function but we're targeting\n\t\t\t// radios instead of checkboxes).\n\t\t\t$('.post_category', rowData).each(function () {\n\t\t\t\tvar terms = $(this).text();\n\n\t\t\t\tif (terms) {\n\t\t\t\t\tvar taxname = $(this).attr('id').replace('_' + id, '');\n\t\t\t\t\t// Target radios (instead of checkboxes).\n\t\t\t\t\t$('ul.' + taxname + '-checklist :radio', editRow).val(terms.split(','));\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\t});\n\n\t/**\n  * Handle the alternative labels, by providing an 'Add more titles'\n  * button and input texts where to add the labels.\n  *\n  * @since 3.2.0\n  */\n\t$(function () {\n\t\t// Add the delete button to the existing input texts.\n\t\t$('.wl-alternative-label > .wl-delete-button').on('click', function (event) {\n\t\t\t$(event.delegateTarget).parent().remove();\n\t\t});\n\n\t\t// Handle the click on the 'Add more titles' button and bind the\n\t\t// event of the (new) delete button.\n\t\t$('#wl-add-alternative-labels-button').on('click', function (event) {\n\t\t\t$(event.delegateTarget).before(function () {\n\t\t\t\tvar $element = $($('#wl-tmpl-alternative-label-input').html());\n\t\t\t\t$element.children('.wl-delete-button').on('click', function () {\n\t\t\t\t\t$element.remove();\n\t\t\t\t});\n\t\t\t\treturn $element;\n\t\t\t});\n\t\t});\n\t});\n\n\t/**\n  * Check for duplicate title/labels via AJAX while the user is typing.\n  *\n  * @since 3.2.0\n  */\n\t$(function () {\n\t\t// return if we are not in the entity editor page (the *wlSettings*\n\t\t// json is only enqueued there) wlSettings.entityBeingEdited comes\n\t\t// from `wp_localize_script`, so '1' (true) or '' (false).\n\t\tif (typeof wlSettings === 'undefined' || '1' !== wlSettings.entityBeingEdited) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Print error message in page and hide it.\n\t\tvar duplicatedEntityErrorDiv = $('<div class=\"wl-notice notice wl-suggestion\"' + ' id=\"wl-same-title-error\" ><p></p></div>').insertBefore('div.wrap [name=post]').hide();\n\n\t\t/**\n   * Check whether the specified title is already used by other\n   * entities.\n   *\n   * @since 3.10.0\n   */\n\t\tvar callback = function callback() {\n\t\t\t// A jQuery reference to the element firing the event.\n\t\t\tvar $this = $(this);\n\n\t\t\t// Delay execution of the check.\n\t\t\t__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__modules_delay__[\"a\" /* default */])($this, __WEBPACK_IMPORTED_MODULE_2__modules_check__[\"a\" /* default */], $, wp.ajax, $this.val(), wlSettings.post_id, wlSettings.l10n['You already published an entity with the same name'], function (html) {\n\t\t\t\t// Set the error div content.\n\t\t\t\t$('#wl-same-title-error p').html(html);\n\n\t\t\t\t// If the html code isn't empty then show the error.\n\t\t\t\tif ('' !== html) {\n\t\t\t\t\tduplicatedEntityErrorDiv.show();\n\t\t\t\t} else {\n\t\t\t\t\t// If the html code is empty, hide the error div.\n\t\t\t\t\tduplicatedEntityErrorDiv.hide();\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\n\t\t// Whenever something happens in the entity title...\n\t\t$('[name=post_title]').on('change paste keyup', callback).each(callback);\n\t});\n\n\t/**\n  * Draw dashboard if needed\n  *\n  * @since 3.4.0\n  */\n\t$(function () {\n\t\t// return if not needed\n\t\tif (!$('#wl-dashboard-widget-inner-wrapper').length) {\n\t\t\treturn;\n\t\t}\n\n\t\t$.getJSON(ajaxurl + '?action=wordlift_get_stats', function (stats) {\n\t\t\t// Get the triples, 0 by default if triples is not a number.\n\t\t\tvar triples = isNaN(stats.triples) ? 0 : stats.triples;\n\n\t\t\t// Calculate wikidata ratio\n\t\t\t// TODO percentage should be added via css\n\t\t\tvar percent = triples * 100 / 947690143;\n\t\t\tstats.wikidata = percent.toFixed(5) + '%';\n\t\t\t// Calculate annotated posts ratio\n\t\t\tvar annotated = stats.annotated_posts * 100 / stats.posts;\n\t\t\tstats.annotatedPostsPercentage = annotated.toFixed(1);\n\t\t\t// Convert NaN to zero if needed\n\t\t\t//\n\t\t\t// See https://github.com/insideout10/wordlift-plugin/issues/269\n\t\t\tstats.annotatedPostsPercentage = stats.annotatedPostsPercentage || 0;\n\t\t\t// TODO percentage should be added via css\n\t\t\tstats.annotatedPostsPercentage = stats.annotatedPostsPercentage + '%';\n\n\t\t\t// Populate annotated posts pie chart\n\t\t\t$('#wl-posts-pie-chart circle').css('stroke-dasharray', stats.annotated_posts * 100 / stats.posts + ' 100');\n\t\t\t// Populate avarage entity ratings gauge chart\n\t\t\t$('#wl-entities-gauge-chart .stat').css('stroke-dasharray', stats.rating / 2 + ' 100');\n\n\t\t\t// TODO percentage should be added via css\n\t\t\tstats.rating = stats.rating + '%';\n\t\t\t// populate value placeholders\n\t\t\tfor (var property in stats) {\n\t\t\t\t$('#wl-dashboard-widget-' + property).text(stats[property]);\n\t\t\t}\n\n\t\t\t// Finally show the widget\n\t\t\t$('#wl-dashboard-widget-inner-wrapper').show();\n\n\t\t\t// Set the same height for stat graph wrappers\n\t\t\t// Links not working with css alternatives\n\t\t\tvar minHeight = 0;\n\t\t\t$('.wl-stat-graph-wrapper').each(function () {\n\t\t\t\tvar stat = $(this);\n\t\t\t\tif (stat.height() > minHeight) {\n\t\t\t\t\tminHeight = stat.height();\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t$('.wl-stat-graph-wrapper').css('min-height', minHeight);\n\t\t});\n\t});\n})(jQuery);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FkbWluL2pzL3dvcmRsaWZ0LWFkbWluLmpzPzIwNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEZWZpbmUgb3VyIGdsb2JhbCBob29rcy5cbiAqXG4gKiBAc2luY2UgMy4wLjBcbiAqL1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCB3b3JkbGlmdCBmcm9tICcuL21vZHVsZXMvd29yZGxpZnQnO1xuaW1wb3J0IGRlbGF5IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9tb2R1bGVzL2NoZWNrJztcblxuKFxuXHRmdW5jdGlvbiggJCApIHtcblx0XHQvKipcblx0XHQgKiBFeGVjdXRlIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDMuMS4wXG5cdFx0ICovXG5cdFx0JCggZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBUaGUgRW50aXR5IFR5cGVzIFRheG9ub215IGlzIGV4Y2x1c2l2ZSwgb25lIGNhbm5vdCBjaG9vc2UgbW9yZVxuXHRcdFx0Ly8gdGhhbiBhIHR5cGUuIFRoZXJlZm9yZSBmcm9tIHRoZSBQSFAgY29kZSB3ZSBwcm92aWRlIGEgV2Fsa2VyXG5cdFx0XHQvLyB0aGF0IGNoYW5nZXMgY2hlY2tib3hlcyBpbnRvIHJhZGlvcy4gSG93ZXZlciB0aGUgcXVpY2tlZGl0IG9uIHRoZVxuXHRcdFx0Ly8gY2xpZW50IHNpZGUgaXMgYXBwbGllZCBvbmx5IHRvIGNoZWNrYm94ZXMsIHNvIHdlIG92ZXJyaWRlIHRoZVxuXHRcdFx0Ly8gZnVuY3Rpb24gaGVyZSB0byBhcHBseSB0aGUgc2VsZWN0aW9uIGFsc28gdG8gcmFkaW9zLlxuXG5cdFx0XHQvLyBEbyBub3QgaG9vaywgaWYgd2UncmUgbm90IG9uIGEgcGFnZSB3aXRoIHRoZSBpbmxpbmVFZGl0UG9zdC5cblx0XHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBpbmxpbmVFZGl0UG9zdCB8fCBudWxsID09PSBpbmxpbmVFZGl0UG9zdCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuXHRcdFx0Y29uc3QgZm5FZGl0ID0gaW5saW5lRWRpdFBvc3QuZWRpdDtcblxuXHRcdFx0Ly8gT3ZlcnJpZGUgdGhlIGVkaXQgZnVuY3Rpb24uXG5cdFx0XHRpbmxpbmVFZGl0UG9zdC5lZGl0ID0gZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0XHQvLyBDYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cblx0XHRcdFx0Zm5FZGl0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHQvLyBHZXQgdGhlIGlkICh0aGlzIGlzIGEgY29weSBvZiB3aGF0IGhhcHBlbnMgaW4gdGhlIG9yaWdpbmFsXG5cdFx0XHRcdC8vIGVkaXQgZnVuY3Rpb24pLlxuXHRcdFx0XHRpZiAoIHR5cGVvZihcblx0XHRcdFx0XHRcdGlkXG5cdFx0XHRcdFx0KSA9PT0gJ29iamVjdCcgKSB7XG5cdFx0XHRcdFx0aWQgPSB0aGlzLmdldElkKCBpZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSByb3cgZGF0YSAoaG9sZGluZyB0aGUgcG9zdCBkYXRhKSBhbmRcblx0XHRcdFx0Ly8gdG8gdGhlIG5ld2x5IGRpc3BsYXllZCBpbmxpbmUgZWRpdCByb3cuXG5cdFx0XHRcdGNvbnN0IHJvd0RhdGEgPSAkKCAnI2lubGluZV8nICsgaWQgKTtcblx0XHRcdFx0Y29uc3QgZWRpdFJvdyA9ICQoICcjZWRpdC0nICsgaWQgKTtcblxuXHRcdFx0XHQvLyBTZWxlY3QgdGhlIHRlcm1zIGZvciB0aGUgdGF4b25vbXkgKHRoaXMgaXMgYSBjb3B5IG9mIHRoZVxuXHRcdFx0XHQvLyBvcmlnaW5hbCBsaW5lcyBpbiB0aGUgZWRpdCBmdW5jdGlvbiBidXQgd2UncmUgdGFyZ2V0aW5nXG5cdFx0XHRcdC8vIHJhZGlvcyBpbnN0ZWFkIG9mIGNoZWNrYm94ZXMpLlxuXHRcdFx0XHQkKCAnLnBvc3RfY2F0ZWdvcnknLCByb3dEYXRhICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGVybXMgPSAkKCB0aGlzICkudGV4dCgpO1xuXG5cdFx0XHRcdFx0aWYgKCB0ZXJtcyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRheG5hbWUgPSAkKCB0aGlzICkuYXR0ciggJ2lkJyApLnJlcGxhY2UoICdfJyArIGlkLCAnJyApO1xuXHRcdFx0XHRcdFx0Ly8gVGFyZ2V0IHJhZGlvcyAoaW5zdGVhZCBvZiBjaGVja2JveGVzKS5cblx0XHRcdFx0XHRcdCQoICd1bC4nICsgdGF4bmFtZSArICctY2hlY2tsaXN0IDpyYWRpbycsIGVkaXRSb3cgKVxuXHRcdFx0XHRcdFx0XHQudmFsKCB0ZXJtcy5zcGxpdCggJywnICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH07XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlIHRoZSBhbHRlcm5hdGl2ZSBsYWJlbHMsIGJ5IHByb3ZpZGluZyBhbiAnQWRkIG1vcmUgdGl0bGVzJ1xuXHRcdCAqIGJ1dHRvbiBhbmQgaW5wdXQgdGV4dHMgd2hlcmUgdG8gYWRkIHRoZSBsYWJlbHMuXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMy4yLjBcblx0XHQgKi9cblx0XHQkKCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEFkZCB0aGUgZGVsZXRlIGJ1dHRvbiB0byB0aGUgZXhpc3RpbmcgaW5wdXQgdGV4dHMuXG5cdFx0XHQkKCAnLndsLWFsdGVybmF0aXZlLWxhYmVsID4gLndsLWRlbGV0ZS1idXR0b24nICkub24oICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0JCggZXZlbnQuZGVsZWdhdGVUYXJnZXQgKS5wYXJlbnQoKS5yZW1vdmUoKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gSGFuZGxlIHRoZSBjbGljayBvbiB0aGUgJ0FkZCBtb3JlIHRpdGxlcycgYnV0dG9uIGFuZCBiaW5kIHRoZVxuXHRcdFx0Ly8gZXZlbnQgb2YgdGhlIChuZXcpIGRlbGV0ZSBidXR0b24uXG5cdFx0XHQkKCAnI3dsLWFkZC1hbHRlcm5hdGl2ZS1sYWJlbHMtYnV0dG9uJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdCQoIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICkuYmVmb3JlKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoICQoICcjd2wtdG1wbC1hbHRlcm5hdGl2ZS1sYWJlbC1pbnB1dCcgKS5odG1sKCkgKTtcblx0XHRcdFx0XHQkZWxlbWVudC5jaGlsZHJlbiggJy53bC1kZWxldGUtYnV0dG9uJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCRlbGVtZW50LnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRyZXR1cm4gJGVsZW1lbnQ7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBDaGVjayBmb3IgZHVwbGljYXRlIHRpdGxlL2xhYmVscyB2aWEgQUpBWCB3aGlsZSB0aGUgdXNlciBpcyB0eXBpbmcuXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMy4yLjBcblx0XHQgKi9cblx0XHQkKCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIHJldHVybiBpZiB3ZSBhcmUgbm90IGluIHRoZSBlbnRpdHkgZWRpdG9yIHBhZ2UgKHRoZSAqd2xTZXR0aW5ncypcblx0XHRcdC8vIGpzb24gaXMgb25seSBlbnF1ZXVlZCB0aGVyZSkgd2xTZXR0aW5ncy5lbnRpdHlCZWluZ0VkaXRlZCBjb21lc1xuXHRcdFx0Ly8gZnJvbSBgd3BfbG9jYWxpemVfc2NyaXB0YCwgc28gJzEnICh0cnVlKSBvciAnJyAoZmFsc2UpLlxuXHRcdFx0aWYgKCB0eXBlb2Ygd2xTZXR0aW5ncyA9PT0gJ3VuZGVmaW5lZCcgfHwgJzEnICE9PSB3bFNldHRpbmdzLmVudGl0eUJlaW5nRWRpdGVkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFByaW50IGVycm9yIG1lc3NhZ2UgaW4gcGFnZSBhbmQgaGlkZSBpdC5cblx0XHRcdGNvbnN0IGR1cGxpY2F0ZWRFbnRpdHlFcnJvckRpdiA9ICQoICc8ZGl2IGNsYXNzPVwid2wtbm90aWNlIG5vdGljZSB3bC1zdWdnZXN0aW9uXCInICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCcgaWQ9XCJ3bC1zYW1lLXRpdGxlLWVycm9yXCIgPjxwPjwvcD48L2Rpdj4nIClcblx0XHRcdFx0Lmluc2VydEJlZm9yZSggJ2Rpdi53cmFwIFtuYW1lPXBvc3RdJyApXG5cdFx0XHRcdC5oaWRlKCk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ2hlY2sgd2hldGhlciB0aGUgc3BlY2lmaWVkIHRpdGxlIGlzIGFscmVhZHkgdXNlZCBieSBvdGhlclxuXHRcdFx0ICogZW50aXRpZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHNpbmNlIDMuMTAuMFxuXHRcdFx0ICovXG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBBIGpRdWVyeSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgZmlyaW5nIHRoZSBldmVudC5cblx0XHRcdFx0Y29uc3QgJHRoaXMgPSAkKCB0aGlzICk7XG5cblx0XHRcdFx0Ly8gRGVsYXkgZXhlY3V0aW9uIG9mIHRoZSBjaGVjay5cblx0XHRcdFx0ZGVsYXkoICR0aGlzLCBjaGVjaywgJCwgd3AuYWpheCwgJHRoaXMudmFsKCksIHdsU2V0dGluZ3MucG9zdF9pZCxcblx0XHRcdFx0XHQgICB3bFNldHRpbmdzLmwxMG5bICdZb3UgYWxyZWFkeSBwdWJsaXNoZWQgYW4gZW50aXR5IHdpdGggdGhlIHNhbWUgbmFtZScgXSxcblx0XHRcdFx0XHQgICBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRcdFx0XHRcdCAgIC8vIFNldCB0aGUgZXJyb3IgZGl2IGNvbnRlbnQuXG5cdFx0XHRcdFx0XHQgICAkKCAnI3dsLXNhbWUtdGl0bGUtZXJyb3IgcCcgKS5odG1sKCBodG1sICk7XG5cblx0XHRcdFx0XHRcdCAgIC8vIElmIHRoZSBodG1sIGNvZGUgaXNuJ3QgZW1wdHkgdGhlbiBzaG93IHRoZSBlcnJvci5cblx0XHRcdFx0XHRcdCAgIGlmICggJycgIT09IGh0bWwgKSB7XG5cdFx0XHRcdFx0XHRcdCAgIGR1cGxpY2F0ZWRFbnRpdHlFcnJvckRpdi5zaG93KCk7XG5cdFx0XHRcdFx0XHQgICB9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQgICAvLyBJZiB0aGUgaHRtbCBjb2RlIGlzIGVtcHR5LCBoaWRlIHRoZSBlcnJvciBkaXYuXG5cdFx0XHRcdFx0XHRcdCAgIGR1cGxpY2F0ZWRFbnRpdHlFcnJvckRpdi5oaWRlKCk7XG5cdFx0XHRcdFx0XHQgICB9XG5cdFx0XHRcdFx0ICAgfSApO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gV2hlbmV2ZXIgc29tZXRoaW5nIGhhcHBlbnMgaW4gdGhlIGVudGl0eSB0aXRsZS4uLlxuXHRcdFx0JCggJ1tuYW1lPXBvc3RfdGl0bGVdJyApXG5cdFx0XHRcdC5vbiggJ2NoYW5nZSBwYXN0ZSBrZXl1cCcsIGNhbGxiYWNrIClcblx0XHRcdFx0LmVhY2goIGNhbGxiYWNrICk7XG5cdFx0fSApO1xuXG5cdFx0LyoqXG5cdFx0ICogRHJhdyBkYXNoYm9hcmQgaWYgbmVlZGVkXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMy40LjBcblx0XHQgKi9cblx0XHQkKCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIHJldHVybiBpZiBub3QgbmVlZGVkXG5cdFx0XHRpZiAoICEgJCggJyN3bC1kYXNoYm9hcmQtd2lkZ2V0LWlubmVyLXdyYXBwZXInICkubGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCQuZ2V0SlNPTiggYWpheHVybCArICc/YWN0aW9uPXdvcmRsaWZ0X2dldF9zdGF0cycsIGZ1bmN0aW9uKCBzdGF0cyApIHtcblx0XHRcdFx0Ly8gR2V0IHRoZSB0cmlwbGVzLCAwIGJ5IGRlZmF1bHQgaWYgdHJpcGxlcyBpcyBub3QgYSBudW1iZXIuXG5cdFx0XHRcdGNvbnN0IHRyaXBsZXMgPSBpc05hTiggc3RhdHMudHJpcGxlcyApID8gMCA6IHN0YXRzLnRyaXBsZXM7XG5cblx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHdpa2lkYXRhIHJhdGlvXG5cdFx0XHRcdC8vIFRPRE8gcGVyY2VudGFnZSBzaG91bGQgYmUgYWRkZWQgdmlhIGNzc1xuXHRcdFx0XHRjb25zdCBwZXJjZW50ID0gdHJpcGxlcyAqIDEwMCAvIDk0NzY5MDE0Mztcblx0XHRcdFx0c3RhdHMud2lraWRhdGEgPSBwZXJjZW50LnRvRml4ZWQoIDUgKSArICclJztcblx0XHRcdFx0Ly8gQ2FsY3VsYXRlIGFubm90YXRlZCBwb3N0cyByYXRpb1xuXHRcdFx0XHRjb25zdCBhbm5vdGF0ZWQgPSBzdGF0cy5hbm5vdGF0ZWRfcG9zdHMgKiAxMDAgLyBzdGF0cy5wb3N0cztcblx0XHRcdFx0c3RhdHMuYW5ub3RhdGVkUG9zdHNQZXJjZW50YWdlID0gYW5ub3RhdGVkLnRvRml4ZWQoIDEgKTtcblx0XHRcdFx0Ly8gQ29udmVydCBOYU4gdG8gemVybyBpZiBuZWVkZWRcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnNpZGVvdXQxMC93b3JkbGlmdC1wbHVnaW4vaXNzdWVzLzI2OVxuXHRcdFx0XHRzdGF0cy5hbm5vdGF0ZWRQb3N0c1BlcmNlbnRhZ2UgPSBzdGF0cy5hbm5vdGF0ZWRQb3N0c1BlcmNlbnRhZ2UgfHwgMDtcblx0XHRcdFx0Ly8gVE9ETyBwZXJjZW50YWdlIHNob3VsZCBiZSBhZGRlZCB2aWEgY3NzXG5cdFx0XHRcdHN0YXRzLmFubm90YXRlZFBvc3RzUGVyY2VudGFnZSA9IHN0YXRzLmFubm90YXRlZFBvc3RzUGVyY2VudGFnZSArICclJztcblxuXHRcdFx0XHQvLyBQb3B1bGF0ZSBhbm5vdGF0ZWQgcG9zdHMgcGllIGNoYXJ0XG5cdFx0XHRcdCQoICcjd2wtcG9zdHMtcGllLWNoYXJ0IGNpcmNsZScgKS5jc3MoXG5cdFx0XHRcdFx0J3N0cm9rZS1kYXNoYXJyYXknLFxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0c3RhdHMuYW5ub3RhdGVkX3Bvc3RzICogMTAwXG5cdFx0XHRcdFx0XHQpIC8gc3RhdHMucG9zdHNcblx0XHRcdFx0XHQpICsgJyAxMDAnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIFBvcHVsYXRlIGF2YXJhZ2UgZW50aXR5IHJhdGluZ3MgZ2F1Z2UgY2hhcnRcblx0XHRcdFx0JCggJyN3bC1lbnRpdGllcy1nYXVnZS1jaGFydCAuc3RhdCcgKS5jc3MoXG5cdFx0XHRcdFx0J3N0cm9rZS1kYXNoYXJyYXknLFxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdHN0YXRzLnJhdGluZyAvIDJcblx0XHRcdFx0XHQpICsgJyAxMDAnXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gVE9ETyBwZXJjZW50YWdlIHNob3VsZCBiZSBhZGRlZCB2aWEgY3NzXG5cdFx0XHRcdHN0YXRzLnJhdGluZyA9IHN0YXRzLnJhdGluZyArICclJztcblx0XHRcdFx0Ly8gcG9wdWxhdGUgdmFsdWUgcGxhY2Vob2xkZXJzXG5cdFx0XHRcdGZvciAoIGNvbnN0IHByb3BlcnR5IGluIHN0YXRzICkge1xuXHRcdFx0XHRcdCQoICcjd2wtZGFzaGJvYXJkLXdpZGdldC0nICsgcHJvcGVydHkgKS50ZXh0KCBzdGF0c1sgcHJvcGVydHkgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRmluYWxseSBzaG93IHRoZSB3aWRnZXRcblx0XHRcdFx0JCggJyN3bC1kYXNoYm9hcmQtd2lkZ2V0LWlubmVyLXdyYXBwZXInICkuc2hvdygpO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgc2FtZSBoZWlnaHQgZm9yIHN0YXQgZ3JhcGggd3JhcHBlcnNcblx0XHRcdFx0Ly8gTGlua3Mgbm90IHdvcmtpbmcgd2l0aCBjc3MgYWx0ZXJuYXRpdmVzXG5cdFx0XHRcdGxldCBtaW5IZWlnaHQgPSAwO1xuXHRcdFx0XHQkKCAnLndsLXN0YXQtZ3JhcGgtd3JhcHBlcicgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zdCBzdGF0ID0gJCggdGhpcyApO1xuXHRcdFx0XHRcdGlmICggc3RhdC5oZWlnaHQoKSA+IG1pbkhlaWdodCApIHtcblx0XHRcdFx0XHRcdG1pbkhlaWdodCA9IHN0YXQuaGVpZ2h0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0JCggJy53bC1zdGF0LWdyYXBoLXdyYXBwZXInICkuY3NzKCAnbWluLWhlaWdodCcsIG1pbkhlaWdodCApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuKSggalF1ZXJ5ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FkbWluL2pzL3dvcmRsaWZ0LWFkbWluLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9")},2:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("window.wp = window.wp || {};\nwindow.wp.wordlift = window.wp.wordlift || {};\n\nif (typeof window.wp.wordlift.trigger === 'undefined') {\n\t_.extend(window.wp.wordlift, Backbone.Events);\n}\n\n/* unused harmony default export */ var _unused_webpack_default_export = window.wp.wordlift;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYWRtaW4vanMvbW9kdWxlcy93b3JkbGlmdC5qcz9iNWUyIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy53cCA9IHdpbmRvdy53cCB8fCB7fTtcbndpbmRvdy53cC53b3JkbGlmdCA9IHdpbmRvdy53cC53b3JkbGlmdCB8fCB7fTtcblxuaWYgKCB0eXBlb2Ygd2luZG93LndwLndvcmRsaWZ0LnRyaWdnZXIgPT09ICd1bmRlZmluZWQnICkge1xuXHRfLmV4dGVuZCggd2luZG93LndwLndvcmRsaWZ0LCBCYWNrYm9uZS5FdmVudHMgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2luZG93LndwLndvcmRsaWZ0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hZG1pbi9qcy9tb2R1bGVzL3dvcmRsaWZ0LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9")}});