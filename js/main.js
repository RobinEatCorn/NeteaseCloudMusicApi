<<<<<<< HEAD
window.onload = 
    () => {
        
    }
=======
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
>>>>>>> 72038505255431f911d3b22d9dec3caac5a65991
