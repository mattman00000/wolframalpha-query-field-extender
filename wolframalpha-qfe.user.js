// ==UserScript==
// @name         WolframAlpha Query Field Extender
// @namespace    http://github.com/mattman00000/wolframalpha-query-field-extender
// @version      0.0.1
// @description  Extends query field on wolframalpha.com
// @author       mattman00000
// @match        *://www.wolframalpha.com/*
// @grant        none
// @updateURL    https://github.com/mattman00000/wolframalpha-query-field-extender/raw/master/wolframalpha-qfe.user.js
// @downloadURL  https://github.com/mattman00000/wolframalpha-query-field-extender/raw/master/wolframalpha-qfe.user.js
// ==/UserScript==

document.getElementById("i").maxLength = 2000;
