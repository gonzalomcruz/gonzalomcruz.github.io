/*
 * gm.js
 */

var home = function () {
  if (window.location.pathname != "gonzalomcruz.github.io/index.html") {
    window.open ("index.html", '_self');
  } else {
    window.scrollTo(0, 0);
  }
};
