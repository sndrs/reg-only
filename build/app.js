System.register('js/app.js', ['npm:lodash@3.10.1'], function (_export) {
    'use strict';

    var _;

    _export('init', init);

    function init() {
        console.log('app is running post-domready');
        console.log('lodash: ', _);
    }

    return {
        setters: [function (_npmLodash3101) {
            _ = _npmLodash3101['default'];
        }],
        execute: function () {}
    };
});
