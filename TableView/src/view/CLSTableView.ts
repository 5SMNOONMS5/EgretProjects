// TypeScript file


namespace view {

    export class CLSTableView extends eui.Component {

        /******************************************************************************************************
       *
       * public property 如果又跟 UI 相關則加上 小m 在前面方便存取
       *
       *****************************************************************************************************/

        public mList: eui.List;

        public mScroller: eui.Scroller;

        /******************************************************************************************************
        *
        * private property 前面加上下底線
        *
        *****************************************************************************************************/

        private _isCompleteLoadSkin: boolean = false;

        private _isScrolling: boolean = false;

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.omComplete, this);
            this.skinName = "skins.CLSTableViewSkin";
        }

        /**
          * 改變 tableview 裡面的值
          * sender {model.CLSTableViewData[]} 只能傳入 CLSTableViewData[] 的屬性
          */
        public refresh(sender: model.CLSTableViewData[]): void {

            if (this._isCompleteLoadSkin == false) {
                helper.logError(`CLSTableView, ${constant.ERROR_SKIN_NOT_LOAD_YET}`)
                return;
            }

            this.stopAnimation();

            // clear ， 不知道有沒有更好的辦法？？
            this.mList.dataProvider.length = 0;
            // assign new data
            this.mList.dataProvider = new eui.ArrayCollection(sender);
            // refersh
            this.mList.dataProviderRefreshed();
        }

        /**
          * 滑到最上面
          */
        public scrollerToTopMost(): void {
            if (this._isCompleteLoadSkin == false) {
                helper.logError(`CLSTableView, ${constant.ERROR_SKIN_NOT_LOAD_YET}`)
                return;
            }

            this.stopAnimation();
            this.mScroller.viewport.scrollV = 0;
        }

        /******************************************************************************************************
        *
        * Private method
        * 
        *****************************************************************************************************/

        private omComplete(): void {
            this._isCompleteLoadSkin = true;

            // 好習慣先判斷 在 remove eventlistener，即使知道上面有 addEventListener
            if (this.hasEventListener(eui.UIEvent.COMPLETE) == true) {
                this.removeEventListener(eui.UIEvent.COMPLETE, this.omComplete, this);
            }

            this.mList.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (e: eui.ItemTapEvent) {
                helper.logDescription(`當前點擊第, ${e.itemIndex} 個 index`);
            }, this);
            this.mScroller.addEventListener(eui.UIEvent.CHANGE_START, function (e: eui.ItemTapEvent) {
                helper.logDescription(`開始滾動`);
                this._isScrolling = true;
            }, this);
            this.mScroller.addEventListener(eui.UIEvent.CHANGE_END, function (e: eui.ItemTapEvent) {
                helper.logDescription(`結束滾動`);
                this._isScrolling = false
            }, this);
        }

        private stopAnimation() {
            if (this._isScrolling == true) {
                this.mScroller.stopAnimation();
                this._isScrolling = false;
            }
        }
    }
}
