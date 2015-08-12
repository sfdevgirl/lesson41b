// var request = $.get("https://www.googleapis.com/youtube/v3/search", { key: "AIzaSyArmpeLgyQRRfItxW0jd3opn7La6V5bDpM", part: "snippet", q: "coding" });
// request.success(function(data){
// 	console.log(data);
// });
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
	var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBM3MxLJkhrPaBZHWom9ZR1U0MDY-aRCEo&part=snippet&q=" + searchTerm;
	console.log(url);
	var json = $.getJSON(url, function(data){
		console.log(data.search);
	});
	console.log(json);
	json.success(function(data){
		console.log(data);
		showResults(data.items);
 	});
}

function showResults(results){
  var html = "";
  $.each(results, function(index, value){
  	
    html += '<p>' + value.snippet.title + '</p>';
    html += '<img src="' + value.snippet.thumbnails['default'].url + '"/>'; 
    console.log(value.snippet.title);
  });
  $('#search-results').html(html);
}