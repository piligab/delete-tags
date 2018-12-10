#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var deletetags = require('./src/deletetags');
var changevalue = require('./src/changevalue');
var poly = require('./src/poly');
var area = require('./src/area');
var distancemoved = require('./src/distancemoved');

var action = argv._[0];
var file = argv._[1];

switch (action) {
	case 'deletetags':
		deletetags(file);
		break;
	case 'changevalue':
		changevalue(file);
		break;
	case 'poly':
		poly(file);
		break;
	case 'area':
		area(file);
		break;
	case 'distancemoved':
		distancemoved(file);
		break;
	default:
		console.log('unknown command');
}