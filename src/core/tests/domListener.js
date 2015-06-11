﻿// Allowed URLs Tests

var husot = husot || {};
husot.tests = husot.tests || {};
husot.tests.domListener = husot.tests.domListener || {};

husot.tests.domListener.runAll = function () {
    var self = this;

    husot.tests.domListener.shouldAllowUrls();
    husot.tests.domListener.shouldNotAllowUrls();
};

husot.tests.domListener.shouldAllowUrls = function () {
    var urls = [
        'http://www.twitch.tv/directory',
        'http://www.twitch.tv/directory/',
        'http://www.twitch.tv/directory/all',
        'http://www.twitch.tv/directory/all/',
        'http://www.twitch.tv/directory/game/Minecraft',
        'http://www.twitch.tv/directory/game/Minecraft/',
        'http://www.twitch.tv/directory/game/League%20of%20Legends',
        'http://www.twitch.tv/directory/game/League%20of%20Legends/',
        'http://www.twitch.tv/directory/game/Minecraft/videos/week',
        'http://www.twitch.tv/directory/game/Minecraft/videos/week/',
        'http://www.twitch.tv/directory/game/League%20of%20Legends/videos/week',
        'http://www.twitch.tv/directory/game/League%20of%20Legends/videos/week/',
        'http://www.twitch.tv/directory/random',
        'http://www.twitch.tv/directory/random/',
        'http://www.twitch.tv/directory/videos/week',
        'http://www.twitch.tv/directory/videos/week/',
    ];

    urls.forEach(function (url) {
        if (!husot.domListener.isUrlAllowed(url)) {
            husot.tests.fail();
        }
    });
};

husot.tests.domListener.shouldNotAllowUrls = function () {
    var urls = [
        'http://www.twitch.tv',
        'http://www.twitch.tv/',
        'http://www.twitch.tv/bla-bla-bla',
        'http://www.twitch.tv/bla-bla-bla/',
        'http://www.twitch.tv/directory/bla-bla-bla',
        'http://www.twitch.tv/directory/bla-bla-bla/',
        'http://www.twitch.tv/directory/following',
        'http://www.twitch.tv/directory/following/',
    ];

    urls.forEach(function (url) {
        if (husot.domListener.isUrlAllowed(url)) {
            husot.tests.fail();
        }
    });
};
