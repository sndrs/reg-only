default:
	./node_modules/.bin/jspm bundle js/libs + domready build/libs.js --skip-source-maps
	./node_modules/.bin/jspm bundle js/app - js/libs build/app.js --skip-source-maps