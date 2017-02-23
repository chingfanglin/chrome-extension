chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.bookmarks.getTree(
        function(bookmarkTreeNodes) {
            for (i = 0; i < bookmarkTreeNodes[0].children[0].children.length; i++) {
                chrome.tabs.create({
                    url: bookmarkTreeNodes[0].children[0].children[i].url
                });
            }
        });
});
