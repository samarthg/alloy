function Controller() {
    function showAlert(e) {
        alert(e.source.title);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__path = "window";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.leftButton = Ti.UI.createButton({
        id: "leftButton",
        title: "left"
    });
    showAlert ? $.__views.leftButton.addEventListener("click", showAlert) : __defers["$.__views.leftButton!click!showAlert"] = true;
    __parentSymbol.leftNavButton = $.__views.leftButton;
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.rightButton = Ti.UI.createButton({
        id: "rightButton",
        title: "right"
    });
    showAlert ? $.__views.rightButton.addEventListener("click", showAlert) : __defers["$.__views.rightButton!click!showAlert"] = true;
    __parentSymbol.rightNavButton = $.__views.rightButton;
    $.__views.__alloyId37 && $.addTopLevelView($.__views.__alloyId37);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("specs/window")($);
    __defers["$.__views.leftButton!click!showAlert"] && $.__views.leftButton.addEventListener("click", showAlert);
    __defers["$.__views.rightButton!click!showAlert"] && $.__views.rightButton.addEventListener("click", showAlert);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;