'use strict';

const descriptions = require('../data/descriptions');

function calculateFibonacci(number) {
    if (number < 3) {
        return 1;
    } else {
        return calculateFibonacci(number - 2) + calculateFibonacci(number - 1);
    }
}

module.exports = (req, reply) => {
    var fib = calculateFibonacci(req.params.num);
    descriptions.getDescriptions((err, descriptions) => {
        var context = {
            descriptionOne: descriptions[0].description,
            descriptionTwo: descriptions[1].description,
            descriptionThree: descriptions[2].description,
            assets_vendor_bootstrap_css_bootstrap_min_css: "http://d3mwt8r58coub.cloudfront.net/vendor/bootstrap/css/bootstrap.min.css",
            assets_css_main_css: "http://d3mwt8r58coub.cloudfront.net/css/main.css",
            image1src: "http://d3mwt8r58coub.cloudfront.net/images/image1.jpeg",
            image2src: "http://d3mwt8r58coub.cloudfront.net/images/image2.jpeg",
            image3src: "http://d3mwt8r58coub.cloudfront.net/images/image3.jpg",
            assets_vendor_jquery_jquery_min_js: "http://d3mwt8r58coub.cloudfront.net/vendor/jquery/jquery.min.js",
            assets_vendor_bootstrap_js_bootstrap_bundle_min_js: "http://d3mwt8r58coub.cloudfront.net/vendor/bootstrap/js/bootstrap.bundle.min.js",
            assets_js_main_js: "http://d3mwt8r58coub.cloudfront.net/js/main.js",
            fibonacci: fib
        };
        return reply.view('index', context);
    });
};