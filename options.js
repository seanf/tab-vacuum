const KEY = "currentWindowOnly";
const checkbox = document.getElementById(KEY);

chrome.storage.local.get(KEY, (result) => {
  checkbox.checked = !!result[KEY];
});

checkbox.addEventListener("change", () => {
  chrome.storage.local.set({ [KEY]: checkbox.checked });
});
