const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30ba99c882mshe72124f549c96dfp1db369jsn03752565e87e',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};

fetch('https://steam2.p.rapidapi.com/search/popular/page/1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));