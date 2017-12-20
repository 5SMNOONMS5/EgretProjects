// TypeScript file






namespace helper {

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
