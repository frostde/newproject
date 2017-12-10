'use strict';

module.exports = (handlers) => {
    return {
        method: 'GET',
        path: '/lfibonacci/{num}',
        config: {
            handler: handlers.lfibonacci
        }
    };
};