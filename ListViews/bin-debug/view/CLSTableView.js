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
            _this._isCompleteLoadSkin = false;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.omComplete, _this);
            _this.skinName = "skins.CLSTableViewSkin";
            console.log("constructor");
            return _this;
        }
        CLSTableView.prototype.refresh = function (sender) {
            this.mList.$setDataProvider(new eui.ArrayCollection(sender));
            this.mList.dataProviderRefreshed();
        };
        /******************************************************************************************************
        *
        * Private method
        *
        *****************************************************************************************************/
        CLSTableView.prototype.omComplete = function () {
            console.log("omComplete");
            this._isCompleteLoadSkin = true;
            this.removeEventListener(eui.UIEvent.COMPLETE, this.omComplete, this);
        };
        return CLSTableView;
    }(eui.Component));
    view.CLSTableView = CLSTableView;
    __reflect(CLSTableView.prototype, "view.CLSTableView");
})(view || (view = {}));
//# sourceMappingURL=CLSTableView.js.map