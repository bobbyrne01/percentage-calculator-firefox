var widget = require("sdk/widget"),
	Data = require("./Data");

exports.init = function(panel) {
	
	widget.Widget({
		id: "percentage-calculator-widget",
		label: "Percentage Calulator",
		contentURL: Data.get("images/ico.png"),
		panel: panel
	});
}