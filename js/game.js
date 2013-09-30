/// <reference path="vendor/sizzle.js" />
/// <reference path="dom.js" />

yahoo.game = (function () {
    var dom = yahoo.dom,
        $ = dom.$;

    /* Ukrywa aktywny ekran (jeśli taki został wybrany) i wyświetla ekran 
     * o określonym identyfikatorze. */
    function showScreen(screenId) {
        var activeScreen = $("#game .screen.active")[0],
            screen = $("#" + screenId)[0];
        if (activeScreen) {
            dom.removeClass(activeScreen, "active");
        }
        dom.addClass(screen, "active");
    }

    // Odsłania metody publiczne. 
    return {
        showScreen: showScreen
    };
})();
