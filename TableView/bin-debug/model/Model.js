// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var model;
(function (model) {
    var TableViewData = (function () {
        function TableViewData(text, textColor, textBackGround) {
            this.text = text;
            this.textColor = textColor;
            this.textBackGround = textBackGround;
        }
        return TableViewData;
    }());
    model.TableViewData = TableViewData;
    __reflect(TableViewData.prototype, "model.TableViewData", ["TableViewDataInterface"]);
})(model || (model = {}));
//# sourceMappingURL=Model.js.map