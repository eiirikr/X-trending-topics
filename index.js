// console.log("Hello World")

const dateElement = document.getElementById('date');
console.log(dateElement);

let currentDate = new Date();
console.log(currentDate)

// dateElement.innerHTML = currentDate

let dateOptions = {
	year: "numeric",
	month: "long",
	day: "numeric"
};

dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		// secret key for each user
		'x-rapidapi-key': '46d26243fcmshfbccca35dd82741p1acf0fjsn92eb9029d26f',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		// the req body should be in a format url parameter
				// variable="Value"
				// NOT: {variable: value}
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424934'})
};

let graphData = [];

// fetcch code sends a req to a specific url
fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data)

	for(let i=0; i<25; i++) {
		graphData.push(
		{
			"name": data.trends[i].name,
			"volume": data.trends[i].volume,
		})
	}

	// collects all the name and volume of the topics and stores it to a variable 'topics'
	let topics = graphData.map(post => {
		return post.name
	})
	let volumes = graphData.map(post => {
		return post.volume
	})

	console.log(graphData);

	const myChart = document.getElementById('myChart');

	let barChart = new Chart(myChart, {
		type: 'bar',
		data: {
			labels: topics,
			datasets: [{
				label: '# of tweets / xeets',
				data: volumes,
				borderWidth: 2,
				backgroundColor: [
		    		'rgba(255, 99, 132, 0.2)',
		    		'rgba(255, 159, 64, 0.2)',
		    		'rgba(255, 205, 86, 0.2)',
		    		'rgba(75, 192, 192, 0.2)',
		    		'rgba(54, 162, 235, 0.2)',
		    		'rgba(153, 102, 255, 0.2)',
		    		'rgba(201, 203, 207, 0.2)'
	        	],
	        	borderColor: [
		    		'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
		        ],
		        hoverBackgroundColor: [
		    		'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
		        ]
		    }]
		},
		options: {
			indexAxis: 'y',
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	})


});


/*let myPost = {
	name: "Lee Sung Kyung",
	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
	volume: 31799,
	followers: 3895734
}

console.log(myPost)

console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.volume);
console.log(myPost.followers);

let graphData = [
	{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
	{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
];

console.log(graphData)

graphData.push(myPost);
console.log(graphData);

console.log(graphData[2]);*/