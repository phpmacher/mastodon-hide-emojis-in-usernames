# Mastodon Hide Emojis in Usernames

## Description

A Tampermonkey script that hides all emojis within usernames in the Mastodon WebUI. The purpose is to create a
distraction-free and cleaner user interface by removing colorful emoji images without affecting the readability of
usernames themselves.

## Features

- Hides all emojis within usernames across the Mastodon interface.
- Ensures a cleaner, distraction-free display by keeping text-only usernames.
- Dynamically hides new emojis in usernames as they appear, even when new content is loaded.
- Requires no runtime configuration – plug and play.

## Rationale

This script aims to improve focus and readability by removing potentially distracting visuals from the UI. By reducing
the number of visual elements, users can maintain a more streamlined experience on Mastodon. This can also improve
accessibility for users who prefer minimalistic interfaces or find colorful elements in usernames distracting.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser if you haven’t already.
2. Create a new script and copy-paste the code from the `mastodon-hide-emojis-in-usernames.user.js` file in this
   repository.
3. Save and enable the script.
4. Update the `@match` directive to point to your Mastodon server.
5. Visit Mastodon, and usernames will now display without emojis.

## Usage

Once installed, the script automatically removes all emojis from usernames on Mastodon pages, both for static and
dynamically loaded content.

## Compatibility

- Tested on Mastodon v4.3.0 and expected to work on future versions unless there are significant HTML changes.
- Works on any Mastodon instance with minor adjustments to the `@match` rules.

## Screenshot

before:

![Screenshot of usernames with emojis in Mastodon UI](./assets/mastodon-user-with-emojis.png)

after:

![Screenshot of emoji-free usernames in Mastodon UI](./assets/mastodon-user-without-emojis.png)

## Planned Extensions

Suggestions for extending this script are welcome! Ideas such as hiding other graphic or non-text UI elements are
possible to make the interface even more distraction-free.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Contributions

Please feel free to submit issues or pull requests if you'd like to improve the script.