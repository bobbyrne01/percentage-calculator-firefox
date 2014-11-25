var Panel = require("sdk/panel"),
	Data = require("./Data")
	ActionButton = require("./ActionButton");

exports.init = function(){
	var ui = Panel.Panel({
		width: 700,
		height: 150,
		contentURL: Data.get("html/view.html"),
		contentScriptFile: Data.get("js/controller.js"),
	});
	
	ActionButton.init(ui);
}