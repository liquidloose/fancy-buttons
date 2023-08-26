/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");






function Edit({
  attributes,
  setAttributes
}) {
  const [values, setValues] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px"
  });
  const colors = [{
    name: "Blue 20",
    color: "#72aee6"
  }
  // ...
  ];

  const layerOne = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Number(attributes.height),
    width: Number(attributes.width),
    background: attributes.color,
    borderTopLeftRadius: attributes.borderRadius.top,
    borderTopRightRadius: attributes.borderRadius.right,
    borderBottomRightRadius: attributes.borderRadius.bottom,
    borderBottomLeftRadius: attributes.borderRadius.left,
    borderColor: attributes.border.color,
    borderStyle: attributes.border.style,
    borderWidth: attributes.border.width
  };
  const layerTwo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Number(attributes.heightTwo),
    width: Number(attributes.widthTwo),
    background: attributes.colorTwo,
    borderTopLeftRadius: attributes.borderRadiusTwo.top,
    borderTopRightRadius: attributes.borderRadiusTwo.right,
    borderBottomRightRadius: attributes.borderRadiusTwo.bottom,
    borderBottomLeftRadius: attributes.borderRadiusTwo.left,
    borderColor: attributes.borderTwo.color,
    borderStyle: attributes.borderTwo.style,
    borderWidth: attributes.borderTwo.width
  };
  const layerThree = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Number(attributes.heightThree),
    width: Number(attributes.widthThree),
    background: attributes.colorThree,
    borderTopLeftRadius: attributes.borderRadiusThree.top,
    borderTopRightRadius: attributes.borderRadiusThree.right,
    borderBottomRightRadius: attributes.borderRadiusThree.bottom,
    borderBottomLeftRadius: attributes.borderRadiusThree.left,
    borderColor: attributes.borderThree.color,
    borderStyle: attributes.borderThree.style,
    borderWidth: attributes.borderThree.width
  };
  console.log(typeof attributes.height);
  console.log(attributes.borderRadius);
  console.log(attributes.borderRadius.top);
  console.log(typeof attributes.borderRadius.top);
  console.log(attributes.color);
  console.log(`This is linkOne: ${attributes.linkOne}`);
  console.log(`The borderColor is: ${attributes.border.color}`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "back2top-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "top-rows"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "gutenpride"),
    onChange: val => setAttributes({
      height: val
    }),
    initialPosition: Number(attributes.height),
    max: 300,
    withInputField: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "gutenpride"),
    onChange: val => setAttributes({
      width: val
    }),
    initialPosition: Number(attributes.width),
    value: attributes.width,
    max: 300,
    withInputField: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border", "gutenpride"),
    onChange: val => setAttributes({
      border: val
    }),
    value: attributes.border,
    withSlider: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border Radius", "gutenpride"),
    values: attributes.borderRadius,
    onChange: val => setAttributes({
      borderRadius: val
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "top-rows"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height 2", "gutenpride"),
    onChange: val => setAttributes({
      heightTwo: val
    }),
    initialPosition: Number(attributes.heightTwo),
    max: 300,
    withInputField: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width 2", "gutenpride"),
    onChange: val => setAttributes({
      widthTwo: val
    }),
    initialPosition: Number(attributes.width),
    value: attributes.widthTwo,
    max: 300,
    withInputField: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border 2", "gutenpride"),
    onChange: val => setAttributes({
      borderTwo: val
    }),
    value: attributes.borderTwo,
    withSlider: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border Radius 2", "gutenpride"),
    values: attributes.borderRadiusTwo,
    onChange: val => setAttributes({
      borderRadiusTwo: val
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "top-rows"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height 3", "gutenpride"),
    onChange: val => setAttributes({
      heightThree: val
    }),
    initialPosition: Number(attributes.heightThree),
    max: 300,
    withInputField: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width 3", "gutenpride"),
    onChange: val => setAttributes({
      widthThree: val
    }),
    initialPosition: Number(attributes.widthThree),
    value: attributes.widthThree,
    max: 300,
    withInputField: false
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border 3", "gutenpride"),
    onChange: val => setAttributes({
      borderThree: val
    }),
    value: attributes.borderThree,
    withSlider: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border Radius", "gutenpride"),
    values: attributes.borderRadiusthree,
    onChange: val => setAttributes({
      borderRadiusThree: val
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "second-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "elements-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "elements"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    className: "selector-boxes",
    autoComplete: "off",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Selector", "gutenpride"),
    help: "Choose a class or id to add to the container for further edits.",
    value: attributes.selector,
    onChange: val => setAttributes({
      selector: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    className: "selector-boxes",
    autoComplete: "off",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Link 1", "gutenpride"),
    help: "Provide a link to the image that you want to use as a background.",
    value: attributes.linkOne,
    onChange: val => setAttributes({
      linkOne: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    className: "selector-boxes",
    autoComplete: "off",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Link 2", "gutenpride"),
    help: "Provide a link to the image that you want to use as a background.",
    value: attributes.linkTwo,
    onChange: val => setAttributes({
      linkTwo: val
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "button-prototype-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "layerOne",
    style: layerOne
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "layerTwo",
    style: layerTwo
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "layerThree",
    style: layerThree
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "color-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "colorModule"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    className: "colorPicker",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", "gutenpride"),
    color: attributes.color,
    onChange: val => setAttributes({
      color: val
    }),
    value: attributes.color,
    defaultValue: "#000"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "colorModule"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    className: "colorPicker",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("noob", "gutenpride"),
    color: attributes.colorTwo,
    onChange: val => setAttributes({
      colorTwo: val
    }),
    value: attributes.colorTwo,
    defaultValue: "#000"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("flex", {
    className: "colorModule"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
    className: "colorPicker",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", "gutenpride"),
    color: attributes.colorThree,
    onChange: val => setAttributes({
      colorThree: val
    }),
    value: attributes.colorThree,
    defaultValue: "#000"
  }))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-selector"
  }, attributes.selector), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-link"
  }, attributes.linkOne), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-link-two"
  }, attributes.linkTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-link-three"
  }, attributes.linkThree), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-height"
  }, attributes.height), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-height-two"
  }, attributes.heightTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-height-three"
  }, attributes.heightThree), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-width"
  }, attributes.width), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-width-two"
  }, attributes.widthTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-width-three"
  }, attributes.widthThree), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-color"
  }, attributes.color), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-color-two"
  }, attributes.colorTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-color-three"
  }, attributes.colorThree), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-border"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderWidth: ", attributes.border.width), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderColor: ", attributes.border.color), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderStyle: ", attributes.border.style), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderRadius top: ", attributes.borderRadius.top)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-border-two"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderWidth: ", attributes.borderTwo.width), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderColor: ", attributes.borderTwo.color), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderStyle: ", attributes.borderTwo.style), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderRadius top: ", attributes.borderRadiusTwo.top)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "back2top-border-three"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderWidth: ", attributes.borderThree.width), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderColor: ", attributes.borderThree.color), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderStyle: ", attributes.borderThree.style), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "borderRadius top: ", attributes.borderRadiusThree.top)));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/fancy-buttons","version":"0.1.0","title":"Fancy Buttons","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"fancy-buttons","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfancy_buttons"] = self["webpackChunkfancy_buttons"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map