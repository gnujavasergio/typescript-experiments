"use strict";
var Speaker = /** @class */ (function () {
    function Speaker() {
    }
    Speaker.prototype.welcome = function (name) {
        console.log("Hola " + name);
    };
    return Speaker;
}());
var speaker = new Speaker();
speaker.welcome("Sergio");
console.log("Hola mundo");
