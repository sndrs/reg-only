default:
	./node_modules/.bin/jspm bundle js/libs build/libs.js --skip-source-maps
	./node_modules/.bin/jspm bundle js/app build/app.js --skip-source-maps