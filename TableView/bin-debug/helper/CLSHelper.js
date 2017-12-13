// TypeScript file
var helper;
(function (helper) {
    /**
    * generate a random integer between min and max
    * @param {Number} min
    * @param {Number} max
    * @return {Number} random generated integer
    */
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    helper.randomInt = randomInt;
})(helper || (helper = {}));
//# sourceMappingURL=CLSHelper.js.map