

exports.for = function (API) {

	var exports = {};

	var targetPath = API.PATH.join(API.getTargetPath(), "app");

	exports.resolve = function (resolver, config, previousResolvedConfig) {

		return resolver({}).then(function (resolvedConfig) {

resolvedConfig.t = Date.now();

			return resolvedConfig;
		});
	}

	exports.turn = function (resolvedConfig) {

console.log("TURN TRAVIS resolvedConfig", resolvedConfig);

process.exit(1);

	}

	return exports;
}
