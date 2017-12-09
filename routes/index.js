'use strict';

module.exports = (handlers) => {
    return {
        method: 'GET',
        path: '/',
        config: {
            handler: handlers.index
        }
    };
};