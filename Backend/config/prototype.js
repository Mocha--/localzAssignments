/**
 * backend/app/config/prototype.js
 */

'use strict'

// ==============================
// call packages
// ==============================
var format = require("string-format")

// enable string.format
var stringFormat = function() {
    format.extend(String.prototype)
}

// enable array.contain
var arrayContain = function() {
    Array.prototype.contain = function(ele) {
        if (this.indexOf(ele) == -1) {
            return false
        } else {
            return true
        }
    }
}

module.exports = {
    extend: function() {
        stringFormat()
        arrayContain()
    }
}
