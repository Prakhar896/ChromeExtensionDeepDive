async function sayHello() {
    console.log('Button clicked!');

    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    if (!tab?.id) {
        console.error('No active tab found.');
        return;
    }

    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                alert('Hello from my extension!');
            }
        });
    } catch (err) {
        console.error('scripting.executeScript failed:', err);
    }
}

document.getElementById("myButton").addEventListener("click", sayHello);