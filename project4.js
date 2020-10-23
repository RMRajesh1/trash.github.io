

function message(){
	let data = document.getElementById("enter");
	let out = document.getElementById("display");
	let error = document.getElementById("error");
	// yet to do...
	if (data.value==''){
		error.style.display="block";
		setTimeout(function(){error.style.display="none";},3000);
	}
	else{
		out.innerText = data.value;
		data.value = "";
	}
}