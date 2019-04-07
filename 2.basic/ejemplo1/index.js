var Speaker = /** @class */ (function () {
    function Speaker() {
    }
    Speaker.prototype.hi = function (name) {
        console.log(name);
    };
    return Speaker;
}());
var speaker = new Speaker();
speaker.hi("Sergio");
