// ==UserScript==
// @name         Mastodon Hide Emojis in Usernames
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides Emojis in Mastodon-WebUI
// @author       @phpmacher@sueden.social
// @match        https://sueden.social/*
// @match        https://*.mastodon.social/*
// @match        https://*.social/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

/**
 * Hides Emojis in Mastodon-WebUI by adding a CSS rule to the document.
 */
(function () {
    // Create a new style element to hold the CSS rule
    const style = document.createElement('style');

    // Define the CSS rule to hide emojis
    style.textContent = `
        /**
         * Hide emojis in/after usernames in each post, detailed statuses, and statuses.
         */
        .display-name__html .emojione,
        .notification__display-name .emojione,
        .notification-group__main__header__label picture,
        .account__header__tabs__name picture,
        .notification-ungrouped__header picture,
        .status__prepend picture
        {
            display: none;
        }
    `;

    // Add the style element to the document head
    document.head.appendChild(style);
})();