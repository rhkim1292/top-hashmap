const HashMap = () => {
	const hash = (str) => {
		if (typeof str !== 'string')
			throw new Error('Must pass data of type string into hash method!');

		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < str.length; i++) {
			hashCode = primeNumber * hashCode + str.charCodeAt(i);
		}

		return hashCode;
	};

	const set = (key, value) => {};

	return {
		hash,
		set,
	};
};
