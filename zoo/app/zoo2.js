/**
 * Zoo excercise.
 * First of all, JavaScript is not class based.
 * It does have, nonetheless, inheritance in the form of "prototypal inheritance".
 * We can simmulate the taste of classes using ES6, but that's just syntactic sugar.
 * Personally, I don't like the idea of having "classes" in JS, sounds confusing.
 * Keeping this in mind, the solution continues :)
 *
 * Solution time: around 30'
 */

var trim = require('trim');
module.exports = zoo2();

/**
 * This is our zoo!
 * It will contain all of our animals.
 * Returns an animal factory, which can be used to create new animals.
 * 
 * @return {Object}
 */
function zoo2() {
	/**
	 * Animal factory.
	 * Specific animal types are created here.
	 *
	 * Examples:
	 * animal('lion') --> returns an unnamed lion object
	 * animal('lion').name('Alex') --> returns a lion named "Alex"
	 * 
	 * @param {String} type The animal type you want to create
	 * @throws {Error} If animal type is unknown
	 */
	function animal(type) {
		var name = '[ unnamed ]',
			typesMap = {
				lion: lion,
				tiger: tiger,
				penguin: penguin
			},
			baseAnimal = {
				name: setName,
				sound: '',
				speak: function(message) {
					return speak(message, this.sound);
				}
			};

		if (!type || !(type in typesMap)) {
			throw new Error('Sorry, this Zoo does not have that kind of animal.');
		}

		// get requested animal type
		var animalObj = typesMap[type]();

		// public interface
		return animalObj;

		//------------------------------------------------------------------------

		function speak(message, sound) {
			message = trim(message);
			sound = sound || ' ';
			var messageParts = message.split(' '),
				spokenMessage = trim(messageParts.join(sound) + sound);
			spokenMessage = name + ' says: ' + spokenMessage;

			return spokenMessage;
		}

		function setName(_name) {
			name = _name;
			return animalObj;
		}

		// set ANIMALS
		function lion() {
			var obj = Object.create(baseAnimal, {
				sound: {
					value: ' roar '
				}
			});

			return obj;
		}

		function tiger() {
			var obj = Object.create(baseAnimal, {
				sound: {
					value: ' grrr '
				}
			});

			return obj;
		}

		function penguin() {
			var obj = Object.create(baseAnimal, {
				sound: {
					value: ' weee '
				}
			});

			return obj;
		}
	}

	// public interface
	return {
		animal: animal
	};

	//----------------------------------------------------------------
}

