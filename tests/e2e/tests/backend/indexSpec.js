/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Tests: Post Edit Page.\n *\n * Test the analysis.\n *\n * @since 3.11.0\n */\n\n/**\n * Define the `PostEditPage` test.\n *\n * @since 3.11.0\n * @constructor\n */\nvar PostEditPage = function PostEditPage() {\n\t// @todo: enable creating a post when Safari and FF will support it.\n\t//\tbrowser.waitForExist( '#menu-posts > a[href=\"edit.php\"]' );\n\t//\n\t//\tbrowser.click( '#menu-posts > a[href=\"edit.php\"]' );\n\t//\n\t//\tbrowser.waitForExist( 'a.page-title-action' );\n\t//\n\t//\tbrowser.click( 'a.page-title-action' );\n\t//\n\t//\tbrowser.waitForExist( '#content_ifr' );\n\t//\n\t//\tbrowser.pause(5000);\n\t//\n\t//\tbrowser.frame( browser.element( '#content_ifr' ).value );\n\t//\n\t//\tbrowser.waitForExist( '#tinymce' );\n\t//\n\t//\tbrowser.click( '#tinymce' );\n\t//\n\t//\tbrowser.keys( 'WordLift brings the power of Artificial\n\t// Intelligence to help you produce richer content and organize it around\n\t// your audience.' );  // Set the company name. // browser.setValue(\n\t// '#tinymce p', 'WordLift brings the power of // Artiﬁcial Intelligence to\n\t// help you produce richer content and // organize it around your\n\t// audience.' ); browser.frameParent();  browser.element( '#publish'\n\t// ).scroll(); browser.click( '#publish' );\n\n\t// Open a post page.\n\tbrowser.url('/wp-admin/post.php?post=3&action=edit');\n\n\t// Wait for the analysis results to load.\n\tbrowser.waitForExist('#wl-entity-list ul li');\n\n\t// Click on the first analysis result.\n\tbrowser.click('#wl-entity-list ul li');\n};\n\n// Finally export the `PostEditPage`.\n/* harmony default export */ __webpack_exports__[\"a\"] = PostEditPage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL1Bvc3RFZGl0UGFnZS5qcz8xMjRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHM6IFBvc3QgRWRpdCBQYWdlLlxuICpcbiAqIFRlc3QgdGhlIGFuYWx5c2lzLlxuICpcbiAqIEBzaW5jZSAzLjExLjBcbiAqL1xuXG4vKipcbiAqIERlZmluZSB0aGUgYFBvc3RFZGl0UGFnZWAgdGVzdC5cbiAqXG4gKiBAc2luY2UgMy4xMS4wXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUG9zdEVkaXRQYWdlID0gZnVuY3Rpb24oKSB7XG5cdC8vIEB0b2RvOiBlbmFibGUgY3JlYXRpbmcgYSBwb3N0IHdoZW4gU2FmYXJpIGFuZCBGRiB3aWxsIHN1cHBvcnQgaXQuXG5cdC8vXHRicm93c2VyLndhaXRGb3JFeGlzdCggJyNtZW51LXBvc3RzID4gYVtocmVmPVwiZWRpdC5waHBcIl0nICk7XG5cdC8vXG5cdC8vXHRicm93c2VyLmNsaWNrKCAnI21lbnUtcG9zdHMgPiBhW2hyZWY9XCJlZGl0LnBocFwiXScgKTtcblx0Ly9cblx0Ly9cdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnYS5wYWdlLXRpdGxlLWFjdGlvbicgKTtcblx0Ly9cblx0Ly9cdGJyb3dzZXIuY2xpY2soICdhLnBhZ2UtdGl0bGUtYWN0aW9uJyApO1xuXHQvL1xuXHQvL1x0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcjY29udGVudF9pZnInICk7XG5cdC8vXG5cdC8vXHRicm93c2VyLnBhdXNlKDUwMDApO1xuXHQvL1xuXHQvL1x0YnJvd3Nlci5mcmFtZSggYnJvd3Nlci5lbGVtZW50KCAnI2NvbnRlbnRfaWZyJyApLnZhbHVlICk7XG5cdC8vXG5cdC8vXHRicm93c2VyLndhaXRGb3JFeGlzdCggJyN0aW55bWNlJyApO1xuXHQvL1xuXHQvL1x0YnJvd3Nlci5jbGljayggJyN0aW55bWNlJyApO1xuXHQvL1xuXHQvL1x0YnJvd3Nlci5rZXlzKCAnV29yZExpZnQgYnJpbmdzIHRoZSBwb3dlciBvZiBBcnRpZmljaWFsXG5cdC8vIEludGVsbGlnZW5jZSB0byBoZWxwIHlvdSBwcm9kdWNlIHJpY2hlciBjb250ZW50IGFuZCBvcmdhbml6ZSBpdCBhcm91bmRcblx0Ly8geW91ciBhdWRpZW5jZS4nICk7ICAvLyBTZXQgdGhlIGNvbXBhbnkgbmFtZS4gLy8gYnJvd3Nlci5zZXRWYWx1ZShcblx0Ly8gJyN0aW55bWNlIHAnLCAnV29yZExpZnQgYnJpbmdzIHRoZSBwb3dlciBvZiAvLyBBcnRp76yBY2lhbCBJbnRlbGxpZ2VuY2UgdG9cblx0Ly8gaGVscCB5b3UgcHJvZHVjZSByaWNoZXIgY29udGVudCBhbmQgLy8gb3JnYW5pemUgaXQgYXJvdW5kIHlvdXJcblx0Ly8gYXVkaWVuY2UuJyApOyBicm93c2VyLmZyYW1lUGFyZW50KCk7ICBicm93c2VyLmVsZW1lbnQoICcjcHVibGlzaCdcblx0Ly8gKS5zY3JvbGwoKTsgYnJvd3Nlci5jbGljayggJyNwdWJsaXNoJyApO1xuXG5cdC8vIE9wZW4gYSBwb3N0IHBhZ2UuXG5cdGJyb3dzZXIudXJsKCAnL3dwLWFkbWluL3Bvc3QucGhwP3Bvc3Q9MyZhY3Rpb249ZWRpdCcgKTtcblxuXHQvLyBXYWl0IGZvciB0aGUgYW5hbHlzaXMgcmVzdWx0cyB0byBsb2FkLlxuXHRicm93c2VyLndhaXRGb3JFeGlzdCggJyN3bC1lbnRpdHktbGlzdCB1bCBsaScgKTtcblxuXHQvLyBDbGljayBvbiB0aGUgZmlyc3QgYW5hbHlzaXMgcmVzdWx0LlxuXHRicm93c2VyLmNsaWNrKCAnI3dsLWVudGl0eS1saXN0IHVsIGxpJyApO1xufTtcblxuLy8gRmluYWxseSBleHBvcnQgdGhlIGBQb3N0RWRpdFBhZ2VgLlxuZXhwb3J0IGRlZmF1bHQgUG9zdEVkaXRQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRlc3RzL2UyZS9zY3JpcHRzL2JhY2tlbmQvUG9zdEVkaXRQYWdlLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFRQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Tests: WordLift Settings Page.\n *\n * @since 3.11.0\n */\n\n/**\n * Define the `SettingsPage` tests.\n *\n * @since 3.11.0\n */\nvar SettingsPage = function SettingsPage() {\n\t// Opens the settings page and check for the initial settings.\n\tit('opens the settings page', function () {\n\t\t// The link to the settings page.\n\t\tvar settingsPageLink = '[href=\"admin.php?page=wl_configuration_admin_menu\"]';\n\n\t\t// Wait for the link to exists, then click.\n\t\tbrowser.waitForExist(settingsPageLink);\n\t\tbrowser.click(settingsPageLink);\n\n\t\t// Wait for the `wl-key` element to exist and to have a `valid` css\n\t\t// class indicating that the key is valid.\n\t\tbrowser.waitForExist('#wl-key.valid');\n\n\t\t// Expect the entity base path with `vocabulary` as path and to be\n\t\t// readonly.\n\t\texpect(browser.getValue('#wl-entity-base-path')).toBe('vocabulary');\n\t\texpect(browser.getAttribute('#wl-entity-base-path', 'readonly')).toBe('true');\n\n\t\t// Expect English to be selected as language.\n\t\texpect(browser.getValue('#wl-site-language')).toBe('en');\n\n\t\t// Check that a publisher is set.\n\t\texpect(browser.getValue('#wl-publisher-id')).not.toBe('');\n\t});\n\n\t// Try changing the license key and see how the input reacts.\n\tit('change the license key', function () {\n\t\t// Get the existing license key.\n\t\tvar licenseKey = browser.getValue('#wl-key');\n\n\t\t// Set an invalid key.\n\t\tbrowser.setValue('#wl-key', 'xyz');\n\n\t\t// Wait for the `wl-key` to turn invalid.\n\t\tbrowser.waitForExist('#wl-key.invalid');\n\n\t\t// Set the valid key again.\n\t\tbrowser.setValue('#wl-key', licenseKey);\n\n\t\t// Wait for the `wl-key` to turn valid.\n\t\tbrowser.waitForExist('#wl-key.valid');\n\n\t\t// @todo: replace with sendKeys when FF will support it.\n\t\t//\t\t// Set an empty key.\n\t\t//\t\tbrowser.setValue( '#wl-key', '' );\n\t\t//\n\t\t//\t\t// Wait for the `wl-key` to turn invalid.\n\t\t//\t\tbrowser.waitForExist( '#wl-key.invalid' );\n\t\t//\t\t// Set the valid key again.\n\t\t//\t\tbrowser.setValue( '#wl-key', licenseKey );\n\t\t//\n\t\t//\t\t// Wait for the `wl-key` to turn valid.\n\t\t//\t\tbrowser.waitForExist( '#wl-key.valid' );\n\t});\n\n\t// Test changing the settings and create a publisher.\n\tit('change the settings', function () {\n\t\t// Click on the 'Create a New Publisher' tab.\n\t\tbrowser.click('[href=\"#tabs-2\"]');\n\n\t\t// Wait for the `wp_publisher[name]` field to be visible.\n\t\tbrowser.waitForVisible('[name=\"wl_publisher\\[name\\]\"]');\n\n\t\t// Click on the `Add Logo` button.\n\t\tbrowser.click('#wl-publisher-media-uploader');\n\n\t\t// Check that the `.media-modal` is visible.\n\t\tbrowser.waitForVisible('.media-modal');\n\n\t\t// @todo: add image upload and selection.\n\n\t\t// Then close it.\n\t\tbrowser.click('.media-modal-close');\n\n\t\t// Set the name.\n\t\tbrowser.setValue('[name=\"wl_publisher\\[name\\]\"]', 'John Smith');\n\n\t\t// Submit the form.\n\t\tbrowser.click('#submit');\n\n\t\t// Wait for the `wl-key` element to exist and to have a `valid` css\n\t\t// class indicating that the key is valid.\n\t\tbrowser.waitForExist('#wl-key.valid');\n\n\t\t// Check that the publisher is set.\n\t\texpect(browser.getText('#wl-publisher-id option:selected')).toBe('John Smith');\n\n\t\t// @todo: also test changing the language.\n\t});\n};\n\n// Finally export the `SettingsPage`.\n/* harmony default export */ __webpack_exports__[\"a\"] = SettingsPage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL1NldHRpbmdzUGFnZS5qcz80N2VmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHM6IFdvcmRMaWZ0IFNldHRpbmdzIFBhZ2UuXG4gKlxuICogQHNpbmNlIDMuMTEuMFxuICovXG5cbi8qKlxuICogRGVmaW5lIHRoZSBgU2V0dGluZ3NQYWdlYCB0ZXN0cy5cbiAqXG4gKiBAc2luY2UgMy4xMS4wXG4gKi9cbmNvbnN0IFNldHRpbmdzUGFnZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBPcGVucyB0aGUgc2V0dGluZ3MgcGFnZSBhbmQgY2hlY2sgZm9yIHRoZSBpbml0aWFsIHNldHRpbmdzLlxuXHRpdCggJ29wZW5zIHRoZSBzZXR0aW5ncyBwYWdlJywgKCkgPT4ge1xuXHRcdC8vIFRoZSBsaW5rIHRvIHRoZSBzZXR0aW5ncyBwYWdlLlxuXHRcdGNvbnN0IHNldHRpbmdzUGFnZUxpbmsgPSAnW2hyZWY9XCJhZG1pbi5waHA/cGFnZT13bF9jb25maWd1cmF0aW9uX2FkbWluX21lbnVcIl0nO1xuXG5cdFx0Ly8gV2FpdCBmb3IgdGhlIGxpbmsgdG8gZXhpc3RzLCB0aGVuIGNsaWNrLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCBzZXR0aW5nc1BhZ2VMaW5rICk7XG5cdFx0YnJvd3Nlci5jbGljayggc2V0dGluZ3NQYWdlTGluayApO1xuXG5cdFx0Ly8gV2FpdCBmb3IgdGhlIGB3bC1rZXlgIGVsZW1lbnQgdG8gZXhpc3QgYW5kIHRvIGhhdmUgYSBgdmFsaWRgIGNzc1xuXHRcdC8vIGNsYXNzIGluZGljYXRpbmcgdGhhdCB0aGUga2V5IGlzIHZhbGlkLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnI3dsLWtleS52YWxpZCcgKTtcblxuXHRcdC8vIEV4cGVjdCB0aGUgZW50aXR5IGJhc2UgcGF0aCB3aXRoIGB2b2NhYnVsYXJ5YCBhcyBwYXRoIGFuZCB0byBiZVxuXHRcdC8vIHJlYWRvbmx5LlxuXHRcdGV4cGVjdCggYnJvd3Nlci5nZXRWYWx1ZSggJyN3bC1lbnRpdHktYmFzZS1wYXRoJyApICkudG9CZSggJ3ZvY2FidWxhcnknICk7XG5cdFx0ZXhwZWN0KCBicm93c2VyLmdldEF0dHJpYnV0ZSggJyN3bC1lbnRpdHktYmFzZS1wYXRoJywgJ3JlYWRvbmx5JyApICkudG9CZSggJ3RydWUnICk7XG5cblx0XHQvLyBFeHBlY3QgRW5nbGlzaCB0byBiZSBzZWxlY3RlZCBhcyBsYW5ndWFnZS5cblx0XHRleHBlY3QoIGJyb3dzZXIuZ2V0VmFsdWUoICcjd2wtc2l0ZS1sYW5ndWFnZScgKSApLnRvQmUoICdlbicgKTtcblxuXHRcdC8vIENoZWNrIHRoYXQgYSBwdWJsaXNoZXIgaXMgc2V0LlxuXHRcdGV4cGVjdCggYnJvd3Nlci5nZXRWYWx1ZSggJyN3bC1wdWJsaXNoZXItaWQnICkgKS5ub3QudG9CZSggJycgKTtcblx0fSApO1xuXG5cdC8vIFRyeSBjaGFuZ2luZyB0aGUgbGljZW5zZSBrZXkgYW5kIHNlZSBob3cgdGhlIGlucHV0IHJlYWN0cy5cblx0aXQoICdjaGFuZ2UgdGhlIGxpY2Vuc2Uga2V5JywgKCkgPT4ge1xuXHRcdC8vIEdldCB0aGUgZXhpc3RpbmcgbGljZW5zZSBrZXkuXG5cdFx0Y29uc3QgbGljZW5zZUtleSA9IGJyb3dzZXIuZ2V0VmFsdWUoICcjd2wta2V5JyApO1xuXG5cdFx0Ly8gU2V0IGFuIGludmFsaWQga2V5LlxuXHRcdGJyb3dzZXIuc2V0VmFsdWUoICcjd2wta2V5JywgJ3h5eicgKTtcblxuXHRcdC8vIFdhaXQgZm9yIHRoZSBgd2wta2V5YCB0byB0dXJuIGludmFsaWQuXG5cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcjd2wta2V5LmludmFsaWQnICk7XG5cblx0XHQvLyBTZXQgdGhlIHZhbGlkIGtleSBhZ2Fpbi5cblx0XHRicm93c2VyLnNldFZhbHVlKCAnI3dsLWtleScsIGxpY2Vuc2VLZXkgKTtcblxuXHRcdC8vIFdhaXQgZm9yIHRoZSBgd2wta2V5YCB0byB0dXJuIHZhbGlkLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnI3dsLWtleS52YWxpZCcgKTtcblxuXHRcdC8vIEB0b2RvOiByZXBsYWNlIHdpdGggc2VuZEtleXMgd2hlbiBGRiB3aWxsIHN1cHBvcnQgaXQuXG5cdFx0Ly9cdFx0Ly8gU2V0IGFuIGVtcHR5IGtleS5cblx0XHQvL1x0XHRicm93c2VyLnNldFZhbHVlKCAnI3dsLWtleScsICcnICk7XG5cdFx0Ly9cblx0XHQvL1x0XHQvLyBXYWl0IGZvciB0aGUgYHdsLWtleWAgdG8gdHVybiBpbnZhbGlkLlxuXHRcdC8vXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnI3dsLWtleS5pbnZhbGlkJyApO1xuXHRcdC8vXHRcdC8vIFNldCB0aGUgdmFsaWQga2V5IGFnYWluLlxuXHRcdC8vXHRcdGJyb3dzZXIuc2V0VmFsdWUoICcjd2wta2V5JywgbGljZW5zZUtleSApO1xuXHRcdC8vXG5cdFx0Ly9cdFx0Ly8gV2FpdCBmb3IgdGhlIGB3bC1rZXlgIHRvIHR1cm4gdmFsaWQuXG5cdFx0Ly9cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcjd2wta2V5LnZhbGlkJyApO1xuXHR9ICk7XG5cblx0Ly8gVGVzdCBjaGFuZ2luZyB0aGUgc2V0dGluZ3MgYW5kIGNyZWF0ZSBhIHB1Ymxpc2hlci5cblx0aXQoICdjaGFuZ2UgdGhlIHNldHRpbmdzJywgKCkgPT4ge1xuXHRcdC8vIENsaWNrIG9uIHRoZSAnQ3JlYXRlIGEgTmV3IFB1Ymxpc2hlcicgdGFiLlxuXHRcdGJyb3dzZXIuY2xpY2soICdbaHJlZj1cIiN0YWJzLTJcIl0nICk7XG5cblx0XHQvLyBXYWl0IGZvciB0aGUgYHdwX3B1Ymxpc2hlcltuYW1lXWAgZmllbGQgdG8gYmUgdmlzaWJsZS5cblx0XHRicm93c2VyLndhaXRGb3JWaXNpYmxlKCAnW25hbWU9XCJ3bF9wdWJsaXNoZXJcXFtuYW1lXFxdXCJdJyApO1xuXG5cdFx0Ly8gQ2xpY2sgb24gdGhlIGBBZGQgTG9nb2AgYnV0dG9uLlxuXHRcdGJyb3dzZXIuY2xpY2soICcjd2wtcHVibGlzaGVyLW1lZGlhLXVwbG9hZGVyJyApO1xuXG5cdFx0Ly8gQ2hlY2sgdGhhdCB0aGUgYC5tZWRpYS1tb2RhbGAgaXMgdmlzaWJsZS5cblx0XHRicm93c2VyLndhaXRGb3JWaXNpYmxlKCAnLm1lZGlhLW1vZGFsJyApO1xuXG5cdFx0Ly8gQHRvZG86IGFkZCBpbWFnZSB1cGxvYWQgYW5kIHNlbGVjdGlvbi5cblxuXHRcdC8vIFRoZW4gY2xvc2UgaXQuXG5cdFx0YnJvd3Nlci5jbGljayggJy5tZWRpYS1tb2RhbC1jbG9zZScgKTtcblxuXHRcdC8vIFNldCB0aGUgbmFtZS5cblx0XHRicm93c2VyLnNldFZhbHVlKCAnW25hbWU9XCJ3bF9wdWJsaXNoZXJcXFtuYW1lXFxdXCJdJywgJ0pvaG4gU21pdGgnICk7XG5cblx0XHQvLyBTdWJtaXQgdGhlIGZvcm0uXG5cdFx0YnJvd3Nlci5jbGljayggJyNzdWJtaXQnICk7XG5cblx0XHQvLyBXYWl0IGZvciB0aGUgYHdsLWtleWAgZWxlbWVudCB0byBleGlzdCBhbmQgdG8gaGF2ZSBhIGB2YWxpZGAgY3NzXG5cdFx0Ly8gY2xhc3MgaW5kaWNhdGluZyB0aGF0IHRoZSBrZXkgaXMgdmFsaWQuXG5cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcjd2wta2V5LnZhbGlkJyApO1xuXG5cdFx0Ly8gQ2hlY2sgdGhhdCB0aGUgcHVibGlzaGVyIGlzIHNldC5cblx0XHRleHBlY3QoIGJyb3dzZXIuZ2V0VGV4dCggJyN3bC1wdWJsaXNoZXItaWQgb3B0aW9uOnNlbGVjdGVkJyApICkudG9CZSggJ0pvaG4gU21pdGgnICk7XG5cblx0XHQvLyBAdG9kbzogYWxzbyB0ZXN0IGNoYW5naW5nIHRoZSBsYW5ndWFnZS5cblx0fSApO1xufTtcblxuLy8gRmluYWxseSBleHBvcnQgdGhlIGBTZXR0aW5nc1BhZ2VgLlxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRlc3RzL2UyZS9zY3JpcHRzL2JhY2tlbmQvU2V0dGluZ3NQYWdlLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBTUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Tests: Setup Page.\n *\n * @since 3.11.0\n */\n\n/**\n * Define the `SetupPage` test.\n *\n * @since 3.11.0\n * @constructor\n */\nvar SetupPage = function SetupPage() {\n\t// `paneX` represents the expected horizontal offset of the current\n\t// pane. It is set the first time, when the _wl-setup_ page is opened.\n\tvar paneX = void 0;\n\n\t/**\n  * Click on the next button in the pane at `index` (1-based).\n  *\n  * @since 3.9.0\n  *\n  * @param {Number} index The pane index (1-based).\n  */\n\tvar clickNextAndWaitForPane = function clickNextAndWaitForPane(index) {\n\t\t// Click on the next button.\n\t\tbrowser.click('.viewport > ul > li:nth-child(' + index + ') [data-wl-next]');\n\n\t\t// Wait until the next pane is visible.\n\t\tbrowser.waitUntil(function () {\n\t\t\t// console.log(browser.getLocation('.viewport > ul >\n\t\t\t// li:nth-child()', 'x'));\n\t\t\treturn paneX === browser.getLocation('.viewport > ul > li:nth-child(' + (index + 1) + ')', 'x');\n\t\t}, 750, 'expected pane to be visible within 750ms');\n\t};\n\n\tit('opens the plugins page and activates WordLift', function () {\n\t\t// Navigate to the plugins page.\n\t\tbrowser.url('/wp-admin/plugins.php');\n\n\t\t// Check the URL.\n\t\t// expect(browser.getUrl()).toMatch(/\\/wp-admin\\/plugins\\.php$/);\n\n\t\t// Get WordLift's row in the plugins' list.\n\t\tbrowser.waitForExist('[data-slug=\"wordlift\"]');\n\n\t\t// Activate WordLift.\n\t\tbrowser.click('[data-slug=\"wordlift\"] .activate a');\n\n\t\t// We got redirected to the `wl-setup` page.\n\t\t// expect(browser.getUrl()).toMatch(/\\/wp-admin\\/index\\.php\\?page=wl-setup$/);\n\n\t\t// Wait until the element becomes invalid.\n\t\tbrowser.waitForExist('.viewport > ul > li:first-child');\n\n\t\t// Set the x offset for the current visible pane.\n\t\tpaneX = browser.getLocation('.viewport > ul > li:first-child', 'x');\n\t});\n\n\tit('continues to License Key', function () {\n\t\t// Click next and wait for the 2nd pane.\n\t\tclickNextAndWaitForPane(1);\n\n\t\t// Set an invalid key.\n\t\tbrowser.setValue('input#key', 'an-invalid-key');\n\n\t\t// Wait until the element becomes invalid.\n\t\tbrowser.waitForExist('input#key.invalid');\n\n\t\t// Set a valid key.\n\t\tbrowser.setValue('input#key', __webpack_require__.i({\"NODE_ENV\":\"production\"}).WORDLIFT_KEY);\n\n\t\t// Wait until the element becomes valid.\n\t\tbrowser.waitForExist('input#key.valid');\n\t});\n\n\tit('continues to Vocabulary', function () {\n\t\t// Click next and wait for the 3rd pane.\n\t\tclickNextAndWaitForPane(2);\n\n\t\t// browser.click('input#vocabulary');\n\t\t//\n\t\t// // Set an invalid vocabulary path.\n\t\t// browser.keys(['Backspace', '_']);\n\t\t//\n\t\t// browser.saveScreenshot();\n\t\t//\n\t\t// // Wait until the element becomes invalid.\n\t\t// browser.waitForExist('input#vocabulary.invalid');\n\t\t//\n\t\t// // Set a valid vocabulary.\n\t\t// browser.keys('Backspace');\n\n\t\t// Wait until the element becomes valid.\n\t\tbrowser.waitForExist('input#vocabulary.valid');\n\t});\n\n\tit('continues to Language', function () {\n\t\t// Click next and wait for the 4th pane.\n\t\tclickNextAndWaitForPane(3);\n\t});\n\n\tit('continues to Publisher', function () {\n\t\t// Click next and wait for the 5th pane.\n\t\tclickNextAndWaitForPane(4);\n\n\t\tbrowser.waitForExist('input#name');\n\n\t\t// Set the company name.\n\t\tbrowser.setValue('input#name', 'Acme Inc.');\n\n\t\t// Click on finish.\n\t\tbrowser.waitForExist('#btn-finish');\n\t\tbrowser.click('#btn-finish');\n\n\t\t// Check that we got back to the admin area.\n\t\tbrowser.waitForExist('.wp-admin');\n\t});\n};\n\n// Finally export the `SetupPage`.\n/* harmony default export */ __webpack_exports__[\"a\"] = SetupPage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL1NldHVwUGFnZS5qcz9mZjJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHM6IFNldHVwIFBhZ2UuXG4gKlxuICogQHNpbmNlIDMuMTEuMFxuICovXG5cbi8qKlxuICogRGVmaW5lIHRoZSBgU2V0dXBQYWdlYCB0ZXN0LlxuICpcbiAqIEBzaW5jZSAzLjExLjBcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTZXR1cFBhZ2UgPSBmdW5jdGlvbigpIHtcblx0Ly8gYHBhbmVYYCByZXByZXNlbnRzIHRoZSBleHBlY3RlZCBob3Jpem9udGFsIG9mZnNldCBvZiB0aGUgY3VycmVudFxuXHQvLyBwYW5lLiBJdCBpcyBzZXQgdGhlIGZpcnN0IHRpbWUsIHdoZW4gdGhlIF93bC1zZXR1cF8gcGFnZSBpcyBvcGVuZWQuXG5cdGxldCBwYW5lWDtcblxuXHQvKipcblx0ICogQ2xpY2sgb24gdGhlIG5leHQgYnV0dG9uIGluIHRoZSBwYW5lIGF0IGBpbmRleGAgKDEtYmFzZWQpLlxuXHQgKlxuXHQgKiBAc2luY2UgMy45LjBcblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBwYW5lIGluZGV4ICgxLWJhc2VkKS5cblx0ICovXG5cdGNvbnN0IGNsaWNrTmV4dEFuZFdhaXRGb3JQYW5lID0gZnVuY3Rpb24oIGluZGV4ICkge1xuXHRcdC8vIENsaWNrIG9uIHRoZSBuZXh0IGJ1dHRvbi5cblx0XHRicm93c2VyLmNsaWNrKCAnLnZpZXdwb3J0ID4gdWwgPiBsaTpudGgtY2hpbGQoJyArIGluZGV4ICsgJykgW2RhdGEtd2wtbmV4dF0nICk7XG5cblx0XHQvLyBXYWl0IHVudGlsIHRoZSBuZXh0IHBhbmUgaXMgdmlzaWJsZS5cblx0XHRicm93c2VyLndhaXRVbnRpbCggZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhicm93c2VyLmdldExvY2F0aW9uKCcudmlld3BvcnQgPiB1bCA+XG5cdFx0XHQvLyBsaTpudGgtY2hpbGQoKScsICd4JykpO1xuXHRcdFx0cmV0dXJuIHBhbmVYID09PSBicm93c2VyLmdldExvY2F0aW9uKCAnLnZpZXdwb3J0ID4gdWwgPiBsaTpudGgtY2hpbGQoJyArIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaW5kZXggKyAxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICkgKyAnKScsICd4JyApO1xuXHRcdH0sIDc1MCwgJ2V4cGVjdGVkIHBhbmUgdG8gYmUgdmlzaWJsZSB3aXRoaW4gNzUwbXMnICk7XG5cdH07XG5cblx0aXQoICdvcGVucyB0aGUgcGx1Z2lucyBwYWdlIGFuZCBhY3RpdmF0ZXMgV29yZExpZnQnLCBmdW5jdGlvbigpIHtcblx0XHQvLyBOYXZpZ2F0ZSB0byB0aGUgcGx1Z2lucyBwYWdlLlxuXHRcdGJyb3dzZXIudXJsKCAnL3dwLWFkbWluL3BsdWdpbnMucGhwJyApO1xuXG5cdFx0Ly8gQ2hlY2sgdGhlIFVSTC5cblx0XHQvLyBleHBlY3QoYnJvd3Nlci5nZXRVcmwoKSkudG9NYXRjaCgvXFwvd3AtYWRtaW5cXC9wbHVnaW5zXFwucGhwJC8pO1xuXG5cdFx0Ly8gR2V0IFdvcmRMaWZ0J3Mgcm93IGluIHRoZSBwbHVnaW5zJyBsaXN0LlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnW2RhdGEtc2x1Zz1cIndvcmRsaWZ0XCJdJyApO1xuXG5cdFx0Ly8gQWN0aXZhdGUgV29yZExpZnQuXG5cdFx0YnJvd3Nlci5jbGljayggJ1tkYXRhLXNsdWc9XCJ3b3JkbGlmdFwiXSAuYWN0aXZhdGUgYScgKTtcblxuXHRcdC8vIFdlIGdvdCByZWRpcmVjdGVkIHRvIHRoZSBgd2wtc2V0dXBgIHBhZ2UuXG5cdFx0Ly8gZXhwZWN0KGJyb3dzZXIuZ2V0VXJsKCkpLnRvTWF0Y2goL1xcL3dwLWFkbWluXFwvaW5kZXhcXC5waHBcXD9wYWdlPXdsLXNldHVwJC8pO1xuXG5cdFx0Ly8gV2FpdCB1bnRpbCB0aGUgZWxlbWVudCBiZWNvbWVzIGludmFsaWQuXG5cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcudmlld3BvcnQgPiB1bCA+IGxpOmZpcnN0LWNoaWxkJyApO1xuXG5cdFx0Ly8gU2V0IHRoZSB4IG9mZnNldCBmb3IgdGhlIGN1cnJlbnQgdmlzaWJsZSBwYW5lLlxuXHRcdHBhbmVYID0gYnJvd3Nlci5nZXRMb2NhdGlvbiggJy52aWV3cG9ydCA+IHVsID4gbGk6Zmlyc3QtY2hpbGQnLCAneCcgKTtcblx0fSApO1xuXG5cdGl0KCAnY29udGludWVzIHRvIExpY2Vuc2UgS2V5JywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gQ2xpY2sgbmV4dCBhbmQgd2FpdCBmb3IgdGhlIDJuZCBwYW5lLlxuXHRcdGNsaWNrTmV4dEFuZFdhaXRGb3JQYW5lKCAxICk7XG5cblx0XHQvLyBTZXQgYW4gaW52YWxpZCBrZXkuXG5cdFx0YnJvd3Nlci5zZXRWYWx1ZSggJ2lucHV0I2tleScsICdhbi1pbnZhbGlkLWtleScgKTtcblxuXHRcdC8vIFdhaXQgdW50aWwgdGhlIGVsZW1lbnQgYmVjb21lcyBpbnZhbGlkLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnaW5wdXQja2V5LmludmFsaWQnICk7XG5cblx0XHQvLyBTZXQgYSB2YWxpZCBrZXkuXG5cdFx0YnJvd3Nlci5zZXRWYWx1ZSggJ2lucHV0I2tleScsIHByb2Nlc3MuZW52LldPUkRMSUZUX0tFWSApO1xuXG5cdFx0Ly8gV2FpdCB1bnRpbCB0aGUgZWxlbWVudCBiZWNvbWVzIHZhbGlkLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnaW5wdXQja2V5LnZhbGlkJyApO1xuXHR9ICk7XG5cblx0aXQoICdjb250aW51ZXMgdG8gVm9jYWJ1bGFyeScsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIENsaWNrIG5leHQgYW5kIHdhaXQgZm9yIHRoZSAzcmQgcGFuZS5cblx0XHRjbGlja05leHRBbmRXYWl0Rm9yUGFuZSggMiApO1xuXG5cdFx0Ly8gYnJvd3Nlci5jbGljaygnaW5wdXQjdm9jYWJ1bGFyeScpO1xuXHRcdC8vXG5cdFx0Ly8gLy8gU2V0IGFuIGludmFsaWQgdm9jYWJ1bGFyeSBwYXRoLlxuXHRcdC8vIGJyb3dzZXIua2V5cyhbJ0JhY2tzcGFjZScsICdfJ10pO1xuXHRcdC8vXG5cdFx0Ly8gYnJvd3Nlci5zYXZlU2NyZWVuc2hvdCgpO1xuXHRcdC8vXG5cdFx0Ly8gLy8gV2FpdCB1bnRpbCB0aGUgZWxlbWVudCBiZWNvbWVzIGludmFsaWQuXG5cdFx0Ly8gYnJvd3Nlci53YWl0Rm9yRXhpc3QoJ2lucHV0I3ZvY2FidWxhcnkuaW52YWxpZCcpO1xuXHRcdC8vXG5cdFx0Ly8gLy8gU2V0IGEgdmFsaWQgdm9jYWJ1bGFyeS5cblx0XHQvLyBicm93c2VyLmtleXMoJ0JhY2tzcGFjZScpO1xuXG5cdFx0Ly8gV2FpdCB1bnRpbCB0aGUgZWxlbWVudCBiZWNvbWVzIHZhbGlkLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnaW5wdXQjdm9jYWJ1bGFyeS52YWxpZCcgKTtcblx0fSApO1xuXG5cdGl0KCAnY29udGludWVzIHRvIExhbmd1YWdlJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gQ2xpY2sgbmV4dCBhbmQgd2FpdCBmb3IgdGhlIDR0aCBwYW5lLlxuXHRcdGNsaWNrTmV4dEFuZFdhaXRGb3JQYW5lKCAzICk7XG5cdH0gKTtcblxuXHRpdCggJ2NvbnRpbnVlcyB0byBQdWJsaXNoZXInLCBmdW5jdGlvbigpIHtcblx0XHQvLyBDbGljayBuZXh0IGFuZCB3YWl0IGZvciB0aGUgNXRoIHBhbmUuXG5cdFx0Y2xpY2tOZXh0QW5kV2FpdEZvclBhbmUoIDQgKTtcblxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnaW5wdXQjbmFtZScgKTtcblxuXHRcdC8vIFNldCB0aGUgY29tcGFueSBuYW1lLlxuXHRcdGJyb3dzZXIuc2V0VmFsdWUoICdpbnB1dCNuYW1lJywgJ0FjbWUgSW5jLicgKTtcblxuXHRcdC8vIENsaWNrIG9uIGZpbmlzaC5cblx0XHRicm93c2VyLndhaXRGb3JFeGlzdCggJyNidG4tZmluaXNoJyApO1xuXHRcdGJyb3dzZXIuY2xpY2soICcjYnRuLWZpbmlzaCcgKTtcblxuXHRcdC8vIENoZWNrIHRoYXQgd2UgZ290IGJhY2sgdG8gdGhlIGFkbWluIGFyZWEuXG5cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcud3AtYWRtaW4nICk7XG5cdH0gKTtcbn07XG5cbi8vIEZpbmFsbHkgZXhwb3J0IHRoZSBgU2V0dXBQYWdlYC5cbmV4cG9ydCBkZWZhdWx0IFNldHVwUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL1NldHVwUGFnZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SetupPage__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SettingsPage__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PostEditPage__ = __webpack_require__(0);\n/**\n * Internal dependencies\n */\n\n\n\n\n// Define the overall tests.\ndescribe('test WordLift', function () {\n\t// Test logging into WordPress.\n\tit('log into WordPress backend', function () {\n\t\t// Open the login page.\n\t\tbrowser.url('/wp-login.php');\n\n\t\t// Wait for the login button.\n\t\tbrowser.waitForVisible('#wp-submit');\n\n\t\t// Type username and password, then submit.\n\t\tbrowser.setValue('#user_login', 'admin');\n\t\tbrowser.setValue('#user_pass', 'admin');\n\t\tbrowser.click('#wp-submit');\n\n\t\t// Wait for the admin screen to load.\n\t\tbrowser.waitForExist('body.wp-admin');\n\t});\n\n\t// Test the Set-up Page. A clean WordPress install is required for this test\n\t// to work.\n\tdescribe('test the Setup Page', __WEBPACK_IMPORTED_MODULE_0__SetupPage__[\"a\" /* default */]);\n\n\t// Test the WordLift Settings Page.\n\tdescribe('test the Settings Page', __WEBPACK_IMPORTED_MODULE_1__SettingsPage__[\"a\" /* default */]);\n\n\t// Test the Post Edit Page.\n\tdescribe('test the Post Edit Page', __WEBPACK_IMPORTED_MODULE_2__PostEditPage__[\"a\" /* default */]);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL2luZGV4LmpzPzE0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IFNldHVwUGFnZSBmcm9tICcuL1NldHVwUGFnZSc7XG5pbXBvcnQgU2V0dGluZ3NQYWdlIGZyb20gJy4vU2V0dGluZ3NQYWdlJztcbmltcG9ydCBQb3N0RWRpdFBhZ2UgZnJvbSAnLi9Qb3N0RWRpdFBhZ2UnO1xuXG4vLyBEZWZpbmUgdGhlIG92ZXJhbGwgdGVzdHMuXG5kZXNjcmliZSggJ3Rlc3QgV29yZExpZnQnLCBmdW5jdGlvbigpIHtcblx0Ly8gVGVzdCBsb2dnaW5nIGludG8gV29yZFByZXNzLlxuXHRpdCggJ2xvZyBpbnRvIFdvcmRQcmVzcyBiYWNrZW5kJywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gT3BlbiB0aGUgbG9naW4gcGFnZS5cblx0XHRicm93c2VyLnVybCggJy93cC1sb2dpbi5waHAnICk7XG5cblx0XHQvLyBXYWl0IGZvciB0aGUgbG9naW4gYnV0dG9uLlxuXHRcdGJyb3dzZXIud2FpdEZvclZpc2libGUoICcjd3Atc3VibWl0JyApO1xuXG5cdFx0Ly8gVHlwZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQsIHRoZW4gc3VibWl0LlxuXHRcdGJyb3dzZXIuc2V0VmFsdWUoICcjdXNlcl9sb2dpbicsICdhZG1pbicgKTtcblx0XHRicm93c2VyLnNldFZhbHVlKCAnI3VzZXJfcGFzcycsICdhZG1pbicgKTtcblx0XHRicm93c2VyLmNsaWNrKCAnI3dwLXN1Ym1pdCcgKTtcblxuXHRcdC8vIFdhaXQgZm9yIHRoZSBhZG1pbiBzY3JlZW4gdG8gbG9hZC5cblx0XHRicm93c2VyLndhaXRGb3JFeGlzdCggJ2JvZHkud3AtYWRtaW4nICk7XG5cdH0gKTtcblxuXHQvLyBUZXN0IHRoZSBTZXQtdXAgUGFnZS4gQSBjbGVhbiBXb3JkUHJlc3MgaW5zdGFsbCBpcyByZXF1aXJlZCBmb3IgdGhpcyB0ZXN0XG5cdC8vIHRvIHdvcmsuXG5cdGRlc2NyaWJlKCAndGVzdCB0aGUgU2V0dXAgUGFnZScsIFNldHVwUGFnZSApO1xuXG5cdC8vIFRlc3QgdGhlIFdvcmRMaWZ0IFNldHRpbmdzIFBhZ2UuXG5cdGRlc2NyaWJlKCAndGVzdCB0aGUgU2V0dGluZ3MgUGFnZScsIFNldHRpbmdzUGFnZSApO1xuXG5cdC8vIFRlc3QgdGhlIFBvc3QgRWRpdCBQYWdlLlxuXHRkZXNjcmliZSggJ3Rlc3QgdGhlIFBvc3QgRWRpdCBQYWdlJywgUG9zdEVkaXRQYWdlICk7XG59ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGVzdHMvZTJlL3NjcmlwdHMvYmFja2VuZC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);