// TypeScript file



namespace core.view {
    /**
      * 讀取中的畫面
      */
    export class ProgressUI extends eui.Component {
     
        // Wether the skin is complete load.
        private _isCompleteLoadSkin: boolean = false;

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.omComplete, this);
            this.skinName = "skins.ProgressUISkin";
        }

        private omComplete(): void {
            this._isCompleteLoadSkin = true;
            this.removeEventListener(eui.UIEvent.COMPLETE, this.omComplete, this);
        }
    }
}