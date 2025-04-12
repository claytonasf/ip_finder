
// popup.js

chrome.action.onClicked.addListener((tab) => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        document.getElementById('ip').innerText = `IP: ${message.ip}`;
       
    });
});


