class LocalStorageHandler {
  saveToLocalStorage = (name: string, value: {}) =>
    localStorage.setItem(`${name}`, JSON.stringify(value));
  getFromLocalStorage = (name: string) => {
    const localStorageContent = localStorage.getItem(name);
    if (localStorageContent !== null) {
      return JSON.parse(localStorageContent);
    } else {
      return false;
    }
  };
  clearLocalStorage = (names: [string]) =>
    names.forEach((name) => localStorage.removeItem(name));
}

const localStorageHandler = new LocalStorageHandler();
export default localStorageHandler;
