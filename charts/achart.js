define(function(require) {
return {
	title: {
		'text': 'A chart title',
		'x': -20
	},
	subtitle: {
		'text': 'Subtitle',
		'x': -20,
	},
	xAxis: {
		categories: ['a', 'b', 'c']	//categories go here
	},
	yAxis: {
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}],
		
	},
	yTitle: {
		text: 'values',
		
	},
	tooltip: {
		valuePrefix: '$'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle',
		borderWidth: 0
	},
	//categories: [],
	//plotLines: [],
	series: [{
		name: 'Test',
		data: [1, 2, 3]
	}],
	data: []
}	
});
