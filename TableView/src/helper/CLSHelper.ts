// TypeScript file



namespace helper {

    /**
    * generate a random integer between min and max
    * @param {Number} min 
    * @param {Number} max
    * @return {Number} random generated integer 
    */
    export function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /******************************************************************************************************
    *
    * custom log 這樣可以更快找到錯誤或者你想要的資訊
    *
    *****************************************************************************************************/

    /**
    * console.info description 的封裝 
    * @param object {any} 需要被 log 的參數
    */
    export function logDescription(object: any) {
        console.info("✅ " + object);
    }

    /**
    * console.error 的封裝
    * @param object {any} 需要被 log 的參數
    */
    export function logError(object: any) {
        console.error("❌ " + object);
    }
}


