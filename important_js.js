
function changePage(that, tag_to_replace, additional_data = null){
	that.fire("iron-signal", {name: "change-signal", tag: tag_to_replace, data: additional_data});
}

function sendMessage(that, name, additional_data = null){
	that.fire("iron-signal", {name: name, data: additional_data});
}

function addToCart(product_id, quantity){
	cart = Cookies.getJSON("cart");
	
	if(!cart){
		cart = {};
	}
	
	if(cart[product_id]){
		cart[product_id] += quantity;
	}else{
		cart[product_id] = quantity;
	}
	
	Cookies.set("cart", cart);
}

function createPicture(where, result, file) {
	if (file) {
		const res = result;
		const id = result.data._id;
		const data = new FormData();
		data.append('image', file, file.name);
		$.ajax(serverURL + where + '/' + id + '/picture', {
			cache: false,
			method: 'POST',
			processData: false,
			contentType: false,
			data: data,
			success: (result, status, xhr) => {
				Materialize.toast('Criado com sucesso', 3000);
				changePage(document.getElementById("main_element"), "init-page", {});
			},
			error: (xhr, status, error) => {
				Materialize.toast('Erro inesperado: ' + JSON.stringify(error), 3000);
			},
		});
	}
}
function createModel(where, form, fileButton) {
	return (e) => {
		e.preventDefault();
		$.ajax(serverURL + where + '/add', {
			cache: false,
			method: 'POST',
			data: form.serialize(),
			success: (result, status, xhr) => {
				if (result.error){
					Materialize.toast(result.error, 3000);
				} else {
					createPicture(where, result, fileButton[0].files[0]);
				}
			},
			error: (xhr, status, error) => {
				Materialize.toast('Erro inesperado: ' + JSON.stringify(error), 3000);
			},
		});
		return false;
	};
}

function editModel(where, who, form) {
	return (e) => {
		e.preventDefault();
		console.log(serverURL + where + '/' + who);
		$.ajax(serverURL + where + '/' + who, {
			cache: false,
			method: 'PUT',
			data: form.serialize(),
			success: (result, status, xhr) => {
				if (result.error){
					Materialize.toast('Erro inesperado: ' + result.error, 3000);
				} else {
					Materialize.toast('Editado com sucesso', 3000);
					changePage(document.getElementById("main_element"), "init-page", {});
				}
			},
			error: (xhr, status, error) => {
				Materialize.toast('Erro inesperado: ' + JSON.stringify(error), 3000);
			},
		});
		return false;
	};
}