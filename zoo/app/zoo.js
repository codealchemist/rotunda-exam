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
module.exports = zoo();

/**
 * This is our zoo!
 * It will contain all of our animals.
 * Returns an object with available animals.
 * 
 * @return {Object}
 */
function zoo() {
	/**
	 * Base animal object.
	 * Specific animal types inherit from this object.
	 * 
	 * @param {String} name
	 */
	function Animal() {
		this.sound = '';
	}
	Animal.prototype.speak = function(message) {
		message = trim(message);
		var messageParts = message.split(' ');
		var spokenMessage = trim(messageParts.join(this.sound) + this.sound);

		return spokenMessage;
	};

	//----------------------------------------------------------------
	// SET ANIMALS
	function Lion() {
		this.sound = ' roar ';
	}
	Lion.prototype = Animal.prototype;

	function Tiger() {
		this.sound = ' grrr ';
	}
	Tiger.prototype = Animal.prototype;

	function Penguin() {
		this.sound = ' weee ';
	}
	Penguin.prototype = Animal.prototype;

	//----------------------------------------------------------------

	// public interface
	return {
		Lion: Lion,
		Tiger: Tiger,
		Penguin: Penguin
	};

	//----------------------------------------------------------------
}

