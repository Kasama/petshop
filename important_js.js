
function changePage(that, tag_to_replace, additional_data = null){
	that.fire("iron-signal", {name: "change-signal", tag: tag_to_replace, data: additional_data});
}
