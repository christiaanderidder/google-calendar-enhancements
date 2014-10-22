// This code runs in the background and checks for changes to the open tabs
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	// Don't do anything if the page has not been fully loaded yet.
	if (changeInfo.status !== 'complete') return;
	if (tab.url.indexOf("chrome-devtools://") >= 0) return;
	
	// Check if the current tab is on a page of google calendar.
	var calendarUrl = 'https://www.google.com/calendar/render';
	if (tab.url.substring(0, calendarUrl.length) === calendarUrl)
	{
		// Inject the javascript that can interact with the page directly
		chrome.tabs.executeScript(tabId, { file: 'enhancements.js' });
	}
});