export function useLocalStorage() {
  function getValue(key) {
    if (!localStorage) return null;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  function setValue(key, value) {
    if (!localStorage) return null;
    localStorage.setItem(key, value);
  }

  function removeValue(key) {
    if (!localStorage) return null;
    localStorage.removeItem(key);
  }

  return {
    getValueFromLocalStorage: getValue,
    saveValueToLocalStorage: setValue,
    removeValueFromLocalStorage: removeValue,
  }
}