'use strict';

const descriptions = require('../data/descriptions');

module.exports = (req, reply) => {
    descriptions.getDescriptions((err, descriptions) => {
        var context = {
            descriptionOne: descriptions[0].description,
            descriptionTwo: descriptions[1].description,
            descriptionThree: descriptions[2].description,
            assets_vendor_bootstrap_css_bootstrap_min_css: "../assets/vendor/bootstrap/css/bootstrap.min.css",
            assets_css_main_css: "../assets/css/main.css",
            image1src: "../assets/images/image1.jpeg",
            image2src: "../assets/images/image2.jpeg",
            image3src: "../assets/images/image3.jpg",
            assets_vendor_jquery_jquery_min_js: "../assets/vendor/jquery/jquery.min.js",
            assets_vendor_bootstrap_js_bootstrap_bundle_min_js: "../assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
            assets_js_main_js: "../assets/js/main.js"
        };
    return reply.view('index', context);
    });


};