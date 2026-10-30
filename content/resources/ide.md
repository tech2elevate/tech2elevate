# Development Environment

Everyone in the program uses the same free tools on a laptop: **Google Chrome** to view your page, **Visual Studio Code** to write code, the **Live Preview** extension to see changes as you type, and **GitHub Copilot** as a coding helper. The quick checklist is in [Week 1: Kickoff](/curriculum/week_1/kickoff). This page has the details and fixes for common problems.

## The starter project

The tech2elevate starter is the folder every student builds their shopping cart in. It has three files:

- `index.html`: the page content
- `styles.css`: the page's appearance
- `script.js`: the page's behavior

[Download it as a zip](/downloads/tech2elevate-starter.zip), extract it, and open the extracted `tech2elevate-starter` folder in VS Code with **File → Open Folder**. Edit any file and the preview updates to match. (Mentors: the source is the `starter/` folder of the [site repository](https://github.com/tech2elevate/tech2elevate).)

## Live Preview

- Install it from the Extensions panel in VS Code (search **Live Preview**, by Microsoft) or from the [marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server).
- Open `index.html` and click **Show Preview** in the upper-right corner of the editor, or right-click the file and choose **Show Preview**.
- The preview opens in a panel beside your code. To see it in Chrome instead, copy the address from the top of the preview panel (it starts with `http://127.0.0.1`) into a Chrome tab.
- The starter project saves your work automatically about a second after you stop typing.

## GitHub Copilot

Copilot is set up to coach, not to write the project for you: it asks guiding questions and points at the right file instead of handing over finished code.

- Sign in with a **GitHub** account. If you don't have one, create it at [github.com](https://github.com/) with a **personal email**. School accounts at Hiawatha are restricted and the sign-in will fail.
- Follow the [VS Code Copilot setup guide](https://code.visualstudio.com/docs/copilot/setup) if the sign-in prompt doesn't appear.

## Common problems

- **The preview is blank or shows an old version.** Make sure the file is saved (a white dot on the tab means unsaved), then click the refresh icon at the top of the preview panel.
- **"Show Preview" isn't in the menu.** The Live Preview extension isn't installed or VS Code needs a restart after installing it.
- **A change to `styles.css` or `script.js` does nothing.** Check that `index.html` links to them with exactly these file names; one wrong letter and the browser can't find the file.
- **Extract All is missing on Windows.** The file is already extracted, or it was opened instead of saved. Find it in **Downloads** and right-click it there.
