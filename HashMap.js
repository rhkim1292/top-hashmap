const HashMap = () => {
	const loadFactor = 0.75;
	let capacity = 16;
	const buckets = [];

	const hash = (str) => {
		if (typeof str !== "string")
			throw new Error("Must pass data of type string into hash method!");

		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < str.length; i++) {
			hashCode = primeNumber * hashCode + str.charCodeAt(i);
		}

		return hashCode;
	};

	const set = (key, value) => {
		const index = hash(key) % capacity;

		buckets[index] = [key, value];

		if (buckets.length / capacity > loadFactor) capacity = capacity * 2;
	};

	return {
		hash,
		set,
	};
};

const hashmap = HashMap();
console.log(hashmap.hash("Sara"));
console.log(hashmap.hash("raSa"));
