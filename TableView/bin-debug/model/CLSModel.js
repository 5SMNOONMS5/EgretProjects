// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var model;
(function (model) {
    var CLSTableViewData = (function () {
        function CLSTableViewData(text, textColor, textBackGround) {
            this.text = text;
            this.textColor = textColor;
            this.textBackGround = textBackGround;
        }
        return CLSTableViewData;
    }());
    model.CLSTableViewData = CLSTableViewData;
    __reflect(CLSTableViewData.prototype, "model.CLSTableViewData", ["TableViewDataInterface"]);
})(model || (model = {}));
//# sourceMappingURL=CLSModel.js.map