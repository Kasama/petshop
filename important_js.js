
function changePage(that, tag_to_replace, additional_data = null){
	that.fire("iron-signal", {name: "change-signal", tag: tag_to_replace, data: additional_data});
}

function sendMessage(that, name, additional_data = null){
	that.fire("iron-signal", {name: name, data: additional_data});
}