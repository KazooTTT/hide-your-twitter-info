// ==UserScript==
// @name         Hide your twitter info
// @namespace    https://github.com/KazooTTT/hide-your-twitter-info
// @version      0.1
// @description  Hide your Twitter information. Prevent others from seeing your ID, nickname, and profile picture in public places. (https://github.com/KazooTTT/hide-your-twitter-info/blob/master/index.js)
// @author       KazooTTT
// @match        https://*.twitter.com/*
// @icon         https://github.com/kazoottt.png
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
  insertStylesBySelector(`div[data-testid="SideNav_AccountSwitcher_Button"]`);

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
