$(document)['ready'](function () {
        $('#cnmuprot')['html']('<a href="https://www.tharabic.com" rel="dofollow" target="_blank">ا</a>');
        setInterval(function () {
                if (!$('#cnmuprot:visible')['length']) {
                  window['location']['href'] = 'https://www.tharabic.com';
                };
            }, 3000);
    });
