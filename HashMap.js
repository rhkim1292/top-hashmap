const HashMap = () => {
	const loadFactor = 0.75;
	let capacity = 1;
	let buckets = [];

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

		if (!buckets[index]) {
			buckets[index] = [];
		}

		buckets[index].push([key, value]);

		if (buckets.filter(Boolean).length / capacity >= loadFactor) {
			capacity = capacity * 2;
			const newBuckets = [];
			for (let i = 0; i < buckets.length; i++) {
				if (!buckets[i] || buckets[i].length === 0) continue;
				for (let j = 0; j < buckets[i].length; j++) {
					const newIndex = hash(buckets[i][j][0]) % capacity;
					if (!newBuckets[newIndex]) newBuckets[newIndex] = [];
					newBuckets[newIndex].push(buckets[i][j]);
				}
			}
			buckets = newBuckets;
		}
	};

	const get = (key) => {
		const index = hash(key) % capacity;

		if (!buckets[index]) return null;

		for (let i = 0; i < buckets[index].length; i++) {
			const currKey = buckets[index][i][0];
			if (currKey === key) return buckets[index][i][1];
		}

		return null;
	};

	const has = (key) => {
		console.log(buckets);
		const index = hash(key) % capacity;

		if (!buckets[index]) return false;

		for (let i = 0; i < buckets[index].length; i++) {
			const currKey = buckets[index][i][0];
			if (currKey === key) return true;
		}

		return false;
	};

	const remove = (key) => {
		const index = hash(key) % capacity;

		if (!buckets[index]) return false;

		for (let i = 0; i < buckets[index].length; i++) {
			const currKey = buckets[index][i][0];
			if (currKey === key) {
				buckets[index].splice(i, 1);
				return true;
			}
		}

		return false;
	};

	return {
		hash,
		set,
		get,
		has,
		remove,
	};
};

const hashmap = HashMap();
hashmap.set('Sara', 10);
hashmap.set('raSa', 10);
hashmap.set('umma', 10);
hashmap.set('randy', 10);
hashmap.set('glen', 20);
hashmap.set('bebe', 12);
hashmap.set('bambi', 10);
hashmap.set('jin', 1);
hashmap.set('kazuya', 3);
hashmap.set('ps5', 85);
console.log(hashmap.has('raSa'));
console.log(hashmap.remove('raSa'));
console.log(hashmap.has('raSa'));