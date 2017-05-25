

function changePage(that, tag_to_replace){
	that.fire("iron-signal", {name:"change-signal", data:tag_to_replace});
}