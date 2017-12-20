// TypeScript file





namespace utility {

    /**
    * generate a random integer between min and max
    * @param {number} min 
    * @param {number} max
    * @return {number} random generated integer 
    */
    export function randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Create a Bitmap object according to name keyword.
     * As for the property of name please refer to the configuration file of resources/resource.json.
     * @param {string} name of image
     * @returns {egret.Bitmap} A bitmap object with given name
     */
    export function createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}