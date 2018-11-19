const content = document.getElementById("content");

function fetchData(var date){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = 
		() => {
			if(xhttp.status==4 && xhttp.statusCode==200){
				content.innerHTML += xhttp.ResponseText;
			}
		}
}

window.onload = 
	() => {
		
	}
