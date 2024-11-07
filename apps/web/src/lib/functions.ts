/**
 * @description Generate a unique ID
 *
 * @example
 * getUniqueID("prefix"); // prefix-123456
 */
export function getUniqueID(prefix: string) {
	return `${prefix}-${Math.floor(Math.random() * 1000000)}`;
}
