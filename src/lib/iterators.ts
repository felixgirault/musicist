export const forEach = <T>(
	iterator: IterableIterator<T>,
	callback: (value: T) => void
) => {
	for (
		let result = iterator.next();
		result && !result.done;
		result = iterator.next()
	) {
		callback(result.value);
	}
};
