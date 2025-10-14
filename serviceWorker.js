chrome.omnibox.onInputStarted.addListener(() => {
    chrome.omnibox.setDefaultSuggestion({
        description: "Default text..."
    })
})

chrome.omnibox.onInputEntered.addListener((text) => {
    chrome.tabs.create({
        url: text
    })
})

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    var suggestions = [];

    suggestions.push({
        deletable: true,
        content: "https://www.reddit.com/search?q=" + text,
        description: "Search Reddit for " + text
    });

    suggestions.push({
        deletable: true,
        content: "https://www.twitter.com/search?q=" + text,
        description: "Search Twitter for " + text
    });

    suggest(suggestions);
});