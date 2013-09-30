/// <reference path="vendor/modernizr.js" />
/// <reference path="dom.js" />
/// <reference path="game.js" />

var yahoo = {};

window.addEventListener("load", function () {
    Modernizr.load([
        {
            load: [
                "js/vendor/sizzle.js",
                "js/dom.js",
                "js/game.js"
            ],
            complete: function () {
                yahoo.game.showScreen("spash-screen");
            }
        }
    ]);
}, false);