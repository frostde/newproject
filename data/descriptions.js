'use strict';

const _ = require('lodash'),
    descriptions = require('./descriptionStore');

function getDescriptions (callback) {
    descriptions.findAll({
        order: [['id', 'DESC']],
    }).then((descriptions) => {
        callback(null, descriptions);
    });
}


module.exports.getDescriptions = getDescriptions;
