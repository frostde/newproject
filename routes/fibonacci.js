'use strict';

module.exports = (handlers) => {
    return {
        method: 'GET',
        path: '/fibonacci/{num}',
        config: {
            handler: handlers.fibonacci
        }
    };
};