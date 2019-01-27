function bookSearch(){
	var search = document.getElementById('search').value
	document.getElementById('results').innerHTML = "",
	console.log(search)

	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data){
			for(i=0; i<data.items.length; i++){
				results.innerHTML += "<h2>" + "Title: " + data.items[i].volumeInfo.title + "</h2>" + "<h3>" + "Authors: "+ data.items[i].volumeInfo.authors + "</h3>" + "<h4>" + "Published Date: " + data.items[i].volumeInfo.publishedDate + "</h4>" + "<img src='" + data.items[i].volumeInfo.imageLinks.thumbnail + "'></img>" + "<a href='" + data.items[i].volumeInfo.infoLink + "'>Click here to learn more</a>"
			}
				
		},

		type: 'GET'
			
	});
}

document.getElementById('button').addEventListener('click', bookSearch, false)