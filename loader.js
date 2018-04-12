$(document)['ready'](function () {
        $('#tha')['html']('<a href="https://www.tharabic.com" rel="dofollow" target="_blank"> المحترف العربي </a>');
        setInterval(function () {
                if (!$('#tha:visible')['length']) {
                  window['location']['href'] = 'https://www.tharabic.com';
                };
            }, 3000);
    });
