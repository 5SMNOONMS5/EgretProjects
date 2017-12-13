// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var view;
(function (view) {
    var CLSTableView = (function (_super) {
        __extends(CLSTableView, _super);
        function CLSTableView() {
            var _this = _super.call(this) || this;
            /******************************************************************************************************
            *
            * private property 前面加上下底線
            *
            *****************************************************************************************************/
            _this._isCompleteLoadSkin = false;
            _this._isScrolling = false;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.omComplete, _this);
            _this.skinName = "skins.CLSTableViewSkin";
            return _this;
        }
        /**
          * 改變 tableview 裡面的值
          * sender {model.CLSTableViewData[]} 只能傳入 CLSTableViewData[] 的屬性
          */
        CLSTableView.prototype.refresh = function (sender) {
            if (this._isCompleteLoadSkin == false) {
                helper.logError("CLSTableView, " + constant.ERROR_SKIN_NOT_LOAD_YET);
                return;
            }
            this.stopAnimation();
            // clear ， 不知道有沒有更好的辦法？？
            this.mList.dataProvider.length = 0;
            // assign new data
            this.mList.dataProvider = new eui.ArrayCollection(sender);
            // refersh
            this.mList.dataProviderRefreshed();
        };
        /**
          * 滑到最上面
          */
        CLSTableView.prototype.scrollerToTopMost = function () {
            if (this._isCompleteLoadSkin == false) {
                helper.logError("CLSTableView, " + constant.ERROR_SKIN_NOT_LOAD_YET);
                return;
            }
            this.stopAnimation();
            this.mScroller.viewport.scrollV = 0;
        };
        /******************************************************************************************************
        *
        * Private method
        *
        *****************************************************************************************************/
        CLSTableView.prototype.omComplete = function () {
            this._isCompleteLoadSkin = true;
            // 好習慣先判斷 在 remove eventlistener，即使知道上面有 addEventListener
            if (this.hasEventListener(eui.UIEvent.COMPLETE) == true) {
                this.removeEventListener(eui.UIEvent.COMPLETE, this.omComplete, this);
            }
            this.mList.addEventListener(eui.ItemTapEvent.ITEM_TAP, function (e) {
                helper.logDescription("\u7576\u524D\u9EDE\u64CA\u7B2C, " + e.itemIndex + " \u500B index");
            }, this);
            this.mScroller.addEventListener(eui.UIEvent.CHANGE_START, function (e) {
                helper.logDescription("\u958B\u59CB\u6EFE\u52D5");
                this._isScrolling = true;
            }, this);
            this.mScroller.addEventListener(eui.UIEvent.CHANGE_END, function (e) {
                helper.logDescription("\u7D50\u675F\u6EFE\u52D5");
                this._isScrolling = false;
            }, this);
        };
        CLSTableView.prototype.stopAnimation = function () {
            if (this._isScrolling == true) {
                this.mScroller.stopAnimation();
                this._isScrolling = false;
            }
        };
        return CLSTableView;
    }(eui.Component));
    view.CLSTableView = CLSTableView;
    __reflect(CLSTableView.prototype, "view.CLSTableView");
})(view || (view = {}));
//# sourceMappingURL=CLSTableView.js.map