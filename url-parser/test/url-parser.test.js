var assert = require('assert');

// unit tests for url-parse.js
var urlParser = require('../app/url-parser');

describe('urlParser module', function() {
	it('should parse a url without params', function() {
		var format = '/:version/api/:collection/:id',
			url = '/6/api/listings/3',
			urlParams = urlParser(format).parse(url),
			expectedUrlParams = {
				version: 6,
				collection: "listings",
				id: 3
			};

		assert.deepEqual(urlParams, expectedUrlParams);
	});

	it('should parse a url with params', function() {
		var format = '/:version/api/:collection/:id',
			url = '/6/api/listings/3?sort=desc&limit=10',
			urlParams = urlParser(format).parse(url),
			expectedUrlParams = {
				version: 6,
				collection: "listings",
				id: 3,
				sort: "desc",
				limit: 10
			};

		assert.deepEqual(urlParams, expectedUrlParams);
	});

	it('should parse a url with only one param', function() {
		var format = '/api/collection/:id',
			url = '/api/collection/42',
			urlParams = urlParser(format).parse(url),
			expectedUrlParams = {
				id: 42
			};

		assert.deepEqual(urlParams, expectedUrlParams);
	});

	it('should parse a url with only one query param', function() {
		var format = '/api/collection',
			url = '/api/collection?id=42',
			urlParams = urlParser(format).parse(url),
			expectedUrlParams = {
				id: 42
			};

		assert.deepEqual(urlParams, expectedUrlParams);
	});
});