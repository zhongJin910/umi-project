export function getLocalStorage(key: string) {
  return localStorage.getItem(key);
}

export function setLocalStorage(key: string, val: string) {
  return localStorage.setItem(key, val);
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}
