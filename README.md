# Meeting Mute Extension

This Chrome extension provides a simple way to mute and unmute audio during online meetings without affecting your computer’s system volume. It adds a popup with "Mute" and "Unmute" buttons, allowing you to control the audio for Google Meet, Zoom, and similar platforms.

## Features

- **Mute Audio**: Mutes all audio and video elements on the meeting page.
- **Unmute Audio**: Restores audio to all previously muted elements.
- **User-Friendly Interface**: Simple popup with buttons to mute/unmute audio.

## How It Works

This extension uses a content script to target `audio` and `video` elements on supported meeting platforms. When the "Mute" or "Unmute" button is clicked, the content script mutes or unmutes these elements directly.

## Folder Structure

```plaintext
meeting-mute-extension/
├── manifest.json      // Extension manifest file with permissions and popup settings
├── background.js      // Background script (optional, included for future enhancements)
├── content.js         // Content script to execute mute/unmute commands on meeting pages
├── popup.html         // HTML for the popup interface with mute/unmute buttons
├── popup.js           // JavaScript for handling popup button actions
└── icons/             // Folder containing icons for the extension
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Files Description

- **`manifest.json`**: Specifies the extension configuration, permissions, and popup settings.
- **`background.js`**: Background script; currently empty but reserved for future functionalities.
- **`content.js`**: Content script that targets `audio` and `video` elements and controls mute/unmute functionality on meeting pages.
- **`popup.html`**: Contains the HTML structure for the popup UI.
- **`popup.js`**: Handles the mute and unmute actions when buttons in the popup are clicked.
- **Icons**: A folder with different sizes of the extension's icon for various uses.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Lalit48/meeting-mute-extension.git
   ```

2. Open Chrome and go to `chrome://extensions/`.

3. Enable **Developer mode** by toggling the switch in the upper-right corner.

4. Click **Load unpacked** and select the folder where you cloned the repository.

5. The extension will now appear in your Chrome toolbar.

## Usage

1. Join a meeting on Google Meet or Zoom.
2. Click the **Meeting Mute Extension** icon in the Chrome toolbar.
3. In the popup, click **Mute** to mute all audio or **Unmute** to restore audio.
4. The extension will display an alert to confirm when audio has been muted or unmuted.

## Limitations

- This extension mutes/unmutes all audio and video elements on the page. If additional audio sources are added during the meeting, they may require re-muting.
- Designed primarily for platforms like Google Meet and Zoom; other meeting platforms may need additional support.

## Future Enhancements

- **Advanced Audio Control**: Mute specific tabs or audio sources individually.
- **Platform Support Expansion**: Extend support for other popular meeting platforms.
- **Audio Notifications**: Visual or sound feedback when muting/unmuting audio.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
