var Panel = require("sdk/panel"),
	Data = require("./Data")
	Widget = require("./Widget");

exports.init = function(){
	ui = Panel.Panel({
		width: 750,
		height: 120,
		contentURL: Data.get("html/Presentation.html"),
		contentScriptFile: Data.get("js/Logic.js"),
	});
	
	Widget.init(ui);
}