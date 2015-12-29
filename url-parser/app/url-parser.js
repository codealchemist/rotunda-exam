// url parser module
// time spent in setup, module and unit tests: 3hs
module.exports = urlParser;

/**
 * Parses urls using the set format.
 * It's parse method returns an object with sent params.
 *
 * @author  Alberto Miranda <b3rt.js@gmail.com>
 * @param  {String} format Example: '/:version/api/:collection/:id'
 * @return {Object} urlParser returns an object containing the parse method for the passed format string.
 */
function urlParser(format) {
	return {
		parse: parse
	};

	/**
	 * Parses passed url and extract its params and query params matching
	 * set format.
	 * Returns an object with all available params.
	 * 
	 * Sample params:
	 *   var format = '/:version/api/:collection/:id',
	 *       url = '/6/api/listings/3';
	 *
	 * @author  Alberto Miranda <b3rt.js@gmail.com>
	 * @param  {String} url Example: /6/api/listings/3
	 * @return {Object} Returns all params sent in the url as an object
	 */
	function parse(url) {
		var formatItems = format.split('/'),
			urlItems = url.split('/'),
			params = {};

		// if we have url query params extract them
		if (url.indexOf('?') !== -1) {
			var urlParams = url.split('?'),
				urlQueryParamsString = urlParams[1];
			urlItems = urlParams[0].split('/');

			// extract query params and add them to params object
			var urlQueryParams = urlQueryParamsString.split('&');
			urlQueryParams.forEach(function(urlQueryParam) {
				var queryQaramNameValue = urlQueryParam.split('='),
					queryParamName = queryQaramNameValue[0],
					queryParamValue = queryQaramNameValue[1];

					params[queryParamName] = queryParamValue;
			});
		}

		// urls and format string should start with a "/"
		// so the first item should be empty
		// drop those ones
		formatItems.shift();
		urlItems.shift();

		// iterate format items
		formatItems.forEach(function (formatItem, i) {
			// detect named params and update params object with them 
			// and their matching values
			if (formatItem.indexOf(':') !== -1) {
				// named param found
				var paramName = formatItem.replace(':', '');
					value = urlItems[i]; // matching value

				// handle numbers
				if (!isNaN(value)) {
					value = Number(value);
				}
				params[paramName] = value;
			}
		});

		return params;
	}
}