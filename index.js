// ==UserScript==
// @name         Hide your twitter info
// @namespace    http://https://github.com/KazooTTT/hide-your-twitter-info
// @version      0.1
// @description  Hide your Twitter information. Prevent others from seeing your ID, nickname, and profile picture in public places.
// @author       KazooTTT
// @match        https://*.twitter.com/*
// @icon         https://github.com/kazoottt.png
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const accountEl = document.querySelector(
      'a[data-testid="AppTabBar_Profile_Link"]'
  );

  const style = document.createElement("style");
  style.textContent = `
div[data-testid="SideNav_AccountSwitcher_Button"]{
display:none
}
`;
  const head = document.querySelector("head");
  head.append(style);
})();

