var assert = require('assert');

// unit tests for url-parse.js
var zoo = require('../app/zoo');

describe('zoo module', function() {
	it('should speak lionese', function() {
		var lionKing = new zoo.Lion(),
			spokenMessage = lionKing.speak('I rulez');

		assert.equal(spokenMessage, 'I roar rulez roar');
	});

	it('should speak tigrese', function() {
		var woods = new zoo.Tiger(),
			spokenMessage = woods.speak('With love');

		assert.equal(spokenMessage, 'With grrr love grrr');
	});

	it('should speak penguinese', function() {
		var kowalski = new zoo.Penguin(),
			spokenMessage = kowalski.speak('Problema solved');

		assert.equal(spokenMessage, 'Problema weee solved weee');
	});
});