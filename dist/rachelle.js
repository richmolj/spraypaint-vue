/*
* rachelle.js
* @version 0.4.5
* @copyright (c) 2016 - KFlash
* @license MIT <undefined/blob/master/LICENSE>
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, function () { 'use strict';

    exports.__esModule = true;
    exports["default"] = {
        // 'a' should not be covered
        a: function () {
            var uncovered = true;
            return uncovered;
        },
        b: function () { return true; }
    };

}));