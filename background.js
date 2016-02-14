chrome.tabs.onUpdated.addListener(function(data) {
	chrome.tabs.getSelected(null, function(tab) {
 		if(tab.url === 'https://www.youtube.com/') {
 			chrome.tabs.update(tab.id, {url: 'https://www.youtube.com/feed/subscriptions'});
 		};
 		if(tab.url === 'https://vk.com/feed') {
 			chrome.tabs.update(tab.id, {url: 'https://vk.com/id0'});
 		};
    });
});
