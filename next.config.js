//  `next.config.js` 작성하기
module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	module: {
		loaders: [
			// Not talking about this
			{
				test: /\.css$/,
				loaders: ["style", "css"], // !!!! Expects array
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader", // !!!! Expects single string
			},
		],
	},
};
