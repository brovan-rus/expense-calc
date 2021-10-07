class LocalStorageHandler {
  saveToLocalStorage = (name : string, value: {}) => localStorage.setItem(`${name}`, JSON.stringify(value));
  getFromLocalStorage = (name: string) => JSON.parse(localStorage.getItem(name) || '');
  clearLocalStorage = (names: [string]) => names.forEach((name) => localStorage.removeItem(name));
}

const localStorageHandler = new LocalStorageHandler();
export default localStorageHandler;
