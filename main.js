const api = {
	key: "a6efcd55ff63d71186be2affc3dffe3d",
	baseurl: "https://api.openweathermap.org/data/2.5/"	
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListner('keypress', setQuery);

function setQuery(evt) {
	if (evt.keyCode == 13){
		getResults(searchbox.value);
	}
}

function getResults(query){
	fetch('')
}