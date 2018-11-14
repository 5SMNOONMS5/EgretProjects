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
    /******************************************************************************************************
    *
    * custom log 這樣可以更快找到錯誤或者你想要的資訊
    *
    *****************************************************************************************************/
    /**
    * console.info description 的封裝
    * @param object {any} 需要被 log 的參數
    */
    function logDescription(object) {
        console.info("✅ " + object);
    }
    helper.logDescription = logDescription;
    /**
    * console.error 的封裝
    * @param object {any} 需要被 log 的參數
    */
    function logError(object) {
        console.error("❌ " + object);
    }
    helper.logError = logError;
})(helper || (helper = {}));
//# sourceMappingURL=Helper.js.map