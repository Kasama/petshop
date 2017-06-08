
function changePage(that, tag_to_replace, additional_data = null){
	that.fire("iron-signal", {name: "change-signal", tag: tag_to_replace, data: additional_data});
}

function sendMessage(that, name, additional_data = null){
	that.fire("iron-signal", {name: name, data: additional_data});
}

function createPicture(where, result, file) {
	if (file) {
		const res = result;
		const id = result.data._id;
		// const file = image[0].files[0];
		const data = new FormData();
		data.append('image', file, file.name);
		$.ajax(serverURL + where + '/' + id + '/picture', {
			cache: false,
			method: 'POST',
			processData: false,
			contentType: false,
			data: data,
			success: (result, status, xhr) => {
				alert("Got success " + JSON.stringify(result) + " and " + JSON.stringify(res));
			},
			error: (xhr, status, error) => {
				alert("Got error " + JSON.stringify(error));
			},
		});
	}
}
function createModel(where, fileButton) {
	return (e) => {
		$.ajax(serverURL + where + '/add', {
			cache: false,
			data: $('form').serialize(),
			success: (result, status, xhr) => {
				console.log("created model");
				createPicture(where, result, fileButton[0].file[0]);
			},
			error: (xhr, status, error) => {
				alert("Got error " + JSON.stringify(error));
			},
			method: 'POST',
		});
	};
}
