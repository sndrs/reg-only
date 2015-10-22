System.register('js/app.js', [], function (_export) {
    'use strict';

    _export('init', init);

    function init() {
        console.log('app is running post-domready');
    }

    return {
        setters: [],
        execute: function () {}
    };
});
