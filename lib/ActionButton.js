var ui = require("sdk/ui"),
	Data = require("./Data"),
	actionButton;
 

exports.init = function(panel) {
	
	actionButton = ui.ActionButton({
		id: "percentage-calculator-widget",
		label: "Percentage Calulator",
		icon: Data.get("images/ico.png"),
		onClick: function(state) {
			
			panel.show({
				position: actionButton
			});
		}
	});
}