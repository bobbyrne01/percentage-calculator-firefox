var Panel = require("sdk/panel"),
	Data = require("./Data")
	Widget = require("./Widget");

exports.init = function(){
	ui = Panel.Panel({
		width: 180,
		height: 180,
		contentURL: Data.get("html/Presentation.html"),
	    onShow: function() { console.log("showing"); }
	});
	
	Widget.init(ui);
}