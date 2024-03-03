  var Webflow = Webflow || [];
  Webflow.push(function() {
    // DOMready has fired
    // May now use jQuery and Webflow api

    var tabTimeout;
    var lastTabClickTime = 0;
    clearTimeout(tabTimeout);

    $(window).on('load', function() {
      tabLoop();
    });

    function tabLoop() {
      tabTimeout = setTimeout(function() {
        // Check if either the navbar is closed or the tabs menu exists, and enough time has elapsed since last tab click
        if (($('.w-nav-menu').length === 0 || !$('.w-nav-button').hasClass('w--open')) && 
        ($('.home_highlights_tabs-menu').length && Date.now() - lastTabClickTime >= 6000)) {
          var $next = $('.home_highlights_tabs-menu').children('.w--current:first').next();

          if ($next.length) {
            $next.click();
          } else {
            $('.home_highlights_tab-link:first').click();
          }
        }

        // Call tabLoop() again
        tabLoop();
      }, 6000); // Change initial delay to 6 seconds
    }

    $('.home_highlights_tab-link').click(function() {
      lastTabClickTime = Date.now();
      clearTimeout(tabTimeout);
      tabTimeout = setTimeout(tabLoop, 6000);
    });
  });
