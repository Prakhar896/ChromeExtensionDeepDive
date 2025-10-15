chrome.action.onClicked.addListener(tab => {
    // execute script in the context of the current tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert('Hello from the extension!');
        }
    })
})