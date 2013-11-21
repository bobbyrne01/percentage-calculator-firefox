var widget = require("sdk/widget"),
	Data = require("./Data");

exports.init = function(panel) {
	
	widget.Widget({
		id: "calculator-widget",
		label: "Calulator",
		contentURL: Data.get("images/ico.png"),
		panel: panel
	});
}