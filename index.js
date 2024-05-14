// ==UserScript==
// @name         Hide your twitter info
// @namespace    https://github.com/KazooTTT/hide-your-twitter-info
// @version      0.2
// @description  Hide your Twitter information. Prevent others from seeing your ID, nickname, and profile picture in public places.
// @author       KazooTTT
// @match        https://*.twitter.com/*
// @icon         https://github.com/kazoottt.png
// @license      MIT
// @grant        none
// ==/UserScript==

const insertStylesBySelector = (selector) => {
  const style = document.createElement("style");
  style.textContent = `
${selector} {
display:none
}
`;
  const head = document.querySelector("head");
  head.append(style);
};

(function () {
  "use strict";
  insertStylesBySelector(`[data-testid="SideNav_AccountSwitcher_Button"] > div:nth-child(1)`);
  insertStylesBySelector(`[data-testid="SideNav_AccountSwitcher_Button"] > div:nth-child(2)`);

  const timer = setInterval(() => {
    const accountEl = document.querySelector(
      'a[data-testid="AppTabBar_Profile_Link"]'
    );
    if (accountEl) {
      const accountId = accountEl.href.split("/").pop();
      insertStylesBySelector(
        `div[data-testid="UserAvatar-Container-${accountId}"]`
      );
      clearInterval(timer);
    }
  }, 1500);
})();
