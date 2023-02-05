export function getStorageItem(
	key: string,

) {
	return  window.localStorage.getItem(key)
}

export function setStorage(items: Record<string, string>) {
	for (const key in items) {
		window.localStorage.setItem(key, items[key])
	}
}

export function cleanStorage() {
	const localStorage = Object.entries(window.localStorage)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	for (const [key, _value] of localStorage) {
		window.localStorage.removeItem(key)
	}
}
