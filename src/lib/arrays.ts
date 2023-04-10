export const withValue = <T>(array: T[], value: T) =>
	array.includes(value) ? array : array.concat(value);

export const withoutValue = <T>(array: T[], value: T) =>
	array.filter((v) => v !== value);
