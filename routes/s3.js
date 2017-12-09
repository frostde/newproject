'use strict';

module.exports = (handlers) => {
    return {
        method: 'GET',
        path: '/s3',
        config: {
            handler: handlers.s3
        }
    };
};