
/* 2. do the data stuff with the API */

// var url = "http://api.giphy.com/v1/gifs/search?api_key=D68yZLmEiqs3VXjlhy8JxPoqy4Qeo8fN=";

// // AJAX Request
// var GiphyAJAXCall = new XMLHttpRequest();
// GiphyAJAXCall.open( 'GET', url );
// GiphyAJAXCall.send();

// GiphyAJAXCall.addEventListener('load',function(e){

//   var data = e.target.response;
//   pushToDOM(data);

// });

function sGiphy(searchQuery) {
	var gurl = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;

	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', gurl );
	GiphyAJAXCall.addEventListener('load', function( data ) {

		var actualData = data.target.response;
		pushToDOM( actualData );
		
	});
	GiphyAJAXCall.send();
}

sGiphy( "dogs" );



/* 3. Show me the GIFs */

function pushToDOM(response) {

  var response = JSON.parse(response);

  var images = response.data;
  var container = document.querySelector('body');
  container.innerHTML = "";


	for(i = 0; i<20; i++) {

			setTimeout(function(){
					var src = images[i].images.fixed_height.url;
					container.innerHTML = "";
					container.innerHTML += "<div class=\"gif\"><img src='"+ src +"' class='container__image' /></div>";
					i++;
			}, 3000*i);
		}

}