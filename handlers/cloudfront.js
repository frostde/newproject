'use strict';

const descriptions = require('../data/descriptions');

module.exports = (req, reply) => {
    descriptions.getDescriptions((err, descriptions) => {
        var context = {
            descriptionOne: descriptions[0].description,
            descriptionTwo: descriptions[1].description,
            descriptionThree: descriptions[2].description
        };
    return reply.view('cloudfront', context);
});
};