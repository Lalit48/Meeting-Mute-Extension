chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("meet.google.com") || tab.url.includes("zoom.us")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  } else {
    alert("Please open a meeting tab (Google Meet or Zoom) to mute.");
  }
});
