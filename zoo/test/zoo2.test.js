var assert = require('assert');

// unit tests for url-parse.js
var zoo2 = require('../app/zoo2');

describe('zoo2 module', function() {
	it('should speak lionese', function() {
		var alex = zoo2.animal('lion').name('Alex'),
			zuba = zoo2.animal('lion').name('Zuba'),
			makunga = zoo2.animal('lion').name('Makunga');

		assert.equal(alex.speak('I rulez'), 'Alex says: I roar rulez roar');
		assert.equal(zuba.speak('I rulez'), 'Zuba says: I roar rulez roar');
		assert.equal(makunga.speak('Dammit'), 'Makunga says: Dammit roar');
	});

	it('should speak tigrese', function() {
		var vitaly = zoo2.animal('tiger').name('Vitaly'),
			tigress = zoo2.animal('tiger').name('Tigress'),
			battlecat = zoo2.animal('tiger').name('Battlecat');

		assert.equal(vitaly.speak('You cannot change circus'), 'Vitaly says: You grrr cannot grrr change grrr circus grrr');
		assert.equal(tigress.speak('Hello tiger'), 'Tigress says: Hello grrr tiger grrr');
		assert.equal(battlecat.speak('Get ready'), 'Battlecat says: Get grrr ready grrr');
	});

	it('should speak penguinese', function() {
		var skipper = zoo2.animal('penguin').name('Skipper'),
			kowalski = zoo2.animal('penguin').name('Kowalski'),
			rico = zoo2.animal('penguin').name('Rico');

		assert.equal(skipper.speak('Remain calm penguins'), 'Skipper says: Remain weee calm weee penguins weee');
		assert.equal(kowalski.speak('Adventure and glory'), 'Kowalski says: Adventure weee and weee glory weee');
		assert.equal(rico.speak('I dunno'), 'Rico says: I weee dunno weee');
	});

	it('should let unnamed animals speak', function() {
		var johnDoe = zoo2.animal('lion');

		assert.equal(johnDoe.speak('Hi'), '[ unnamed ] says: Hi roar');
	});

	it('should give unnamed animals a name', function() {
		var johnDoe = zoo2.animal('lion');
		assert.equal(johnDoe.speak('Hi'), '[ unnamed ] says: Hi roar');

		johnDoe.name('John Doe');
		assert.equal(johnDoe.speak('Hi'), 'John Doe says: Hi roar');
	});

	it('should change animals name', function() {
		var penguin = zoo2.animal('penguin').name('Skipper');
		assert.equal(penguin.speak('Hi'), 'Skipper says: Hi weee');

		penguin.name('Private');
		assert.equal(penguin.speak('Roger'), 'Private says: Roger weee');
	});

	it('should throw an error if the requested animal is not available', function() {
		function createUnavailableAnimal() {
			zoo2.animal('velociraptor');
		}
		assert.throws(createUnavailableAnimal, Error, 'Error: Sorry, this Zoo does not have that kind of animal.');
	});
});