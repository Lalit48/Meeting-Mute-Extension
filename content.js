// Ensure the script only runs once per page load
if (!window.hasRunMeetingMuteExtension) {
  window.hasRunMeetingMuteExtension = true;  // Flag to prevent rerunning the code

  // Function to mute all audio and video elements on the page
  function muteMeetingAudio() {
    const mediaElements = document.querySelectorAll("audio, video");

    mediaElements.forEach((element) => {
      element.muted = true;  // Directly mute the element
    });

    alert("Meeting audio has been muted.");
  }

  // Run the mute function
  muteMeetingAudio();
}
