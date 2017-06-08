
function changePage(that, tag_to_replace, additional_data = null){
	that.fire("iron-signal", {name: "change-signal", tag: tag_to_replace, data: additional_data});
}

function sendMessage(that, name, additional_data = null){
	that.fire("iron-signal", {name: name, data: additional_data});
}

function addToCart(product_id, quantity){
	cart = Cookies.get("cart");
	if(cart[product_id]){
		cart[product_id] += quantity;
	}else{
		cart[product_id] = quantity;
	}
	Cookies.set("cart", cart);
}