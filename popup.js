// Send a message to the content script to mute or unmute audio
function sendCommand(command) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: (cmd) => {
        // Mute or unmute audio and video elements based on the command
        const mediaElements = document.querySelectorAll("audio, video");
        mediaElements.forEach((element) => {
          element.muted = (cmd === "mute");
        });
        alert(`Meeting audio has been ${cmd}d.`);
      },
      args: [command]
    });
  });
}

document.getElementById("muteButton").addEventListener("click", () => sendCommand("mute"));
document.getElementById("unmuteButton").addEventListener("click", () => sendCommand("unmute"));
