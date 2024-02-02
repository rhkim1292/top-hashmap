const HashMap = () => {
	const loadFactor = 0.74;
	let capacity = 1;
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

		if (buckets.length / capacity > loadFactor) {
			capacity = capacity * 2
			console.log(capacity);
		}
	};

	return {
		hash,
		set,
		capacity,
		buckets,
	};
};

const hashmap = HashMap();
hashmap.set('Sara', 10);
console.log(hashmap.buckets);
hashmap.set('raSa', 10);
console.log(hashmap.buckets);
hashmap.set('glen', 10);
console.log(hashmap.buckets);
hashmap.set('umma', 10);
console.log(hashmap.buckets);
hashmap.set('allahu', 20);
console.log(hashmap.buckets);