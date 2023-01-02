chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
if (request.type === 'updateSettings') {
const { jobTitle, location } = request.settings;
chrome.storage.local.set({ settings: { jobTitle, location } });
}
});

chrome.storage.local.get('settings', (result) => {
const { jobTitle, location } = result.settings;
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
chrome.tabs.sendMessage(tabs[0].id, { type: 'searchAndApply', jobTitle, location });
});
});
