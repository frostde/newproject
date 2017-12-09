'use strict';

module.exports = (handlers) => {
    return {
        method: 'GET',
        path: '/cloudfront',
        config: {
            handler: handlers.cloudfront
        }
    };
};