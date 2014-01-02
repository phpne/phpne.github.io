(function($) {
    // open external links in a new tab/window
    $('a[rel^="external"]').on('click', function(e) {
        e.preventDefault();
        window.open(this.href);
    });
})(jQuery);