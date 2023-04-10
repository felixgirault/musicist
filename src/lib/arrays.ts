export const withValue = <T>(array: T[], value: T) =>
	array.includes(value) ? array : array.concat(value);

export const withoutValue = <T>(array: T[], value: T) =>
	array.filter((v) => v !== value);

export const indexBy = <
	T extends Record<string, any>,
	K extends keyof T
>(
	objects: T[],
	key: K
) =>
	objects.reduce(
		(index, object) => ({
			...index,
			[object[key]]: object
		}),
		{} as Record<T[K], T>
	);

export const sort = <T>(
	array: T[],
	compare?: (a: T, b: T) => number
) => {
	const clone = [...array];
	clone.sort(compare);
	return clone;
};

export const sortBy = <T, K extends keyof T>(
	array: T[],
	key: K,
	compare: (a: T[K], b: T[K]) => number
) => sort(array, (a, b) => compare(a[key], b[key]));

export const range = (count: number, start = 0) =>
	[...Array(count).keys()].map((i) => start + i);

export const reverse = <T>(array: T[]) => [...array].reverse();
