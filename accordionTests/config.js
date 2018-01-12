requirejs.config({
    paths : { 
        jquery : 'libs/jquery',
        jqueryui : 'libs/jqueryui',
        jquerylayout : 'libs/jquerylayout',
        jquerymigrate : 'libs/jquerymigrate',
        underscore : 'libs/underscore',
        backbone : 'libs/backbone',
        handlebars : 'libs/handlebars',
        marionette : 'libs/marionette',
        wreqr: 'libs/wreqr',
        babysitter: 'libs/babysitter',
        highcharts: 'libs/highcharts',
        text : 'libs/text',
        chosen: 'libs/chosen',
	
	//accordionPanel: 
    },
    shim : {
        'jqueryui' : { deps: ['jquery'], exports: 'jqueryui' },
        'jquerymigrate': { deps: ['jquery'], exports: 'jquery'},
        'jquerylayout': { deps: ['jquery', 'jqueryui', 'jquerymigrate'], exports: 'jquerylayout' },
        'marionette': { deps : ['jquery', 'underscore', 'backbone'], exports: 'marionette' },
        'highcharts': { deps: ['jquery'], exports: 'highcharts'}
    }
});

require(['accordionTests/main.js']);
