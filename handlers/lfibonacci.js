'use strict';

const descriptions = require('../data/descriptions');

module.exports = (req, reply) => {

    var apigClientFactory = require('aws-api-gateway-client').default;
    var apigClient = apigClientFactory.newClient({
        invokeUrl:'https://fsose2b793.execute-api.us-east-2.amazonaws.com/postman'
    });

    var number = req.params.num;

    var params = {

    };

    var body = {
        "async": true,
        "crossDomain": true,
        "method": "POST",
        "dataType": "json",
        "number": number,
        "data": { "number": 15 },
        "headers": {
            "cache-control": "no-cache",
            "content-type": "application/json"
        }
    };
    var additionalParams = {
        headers: {},
        queryParams: {}
    };
    apigClient.invokeApi(params, "/", 'POST', additionalParams, body).then(function(result) {
        var value = JSON.parse(result.data.body);
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
                fibonacci: value.fibonacciNumber
            };
        return reply.view('index', context);
        });
    }).catch(function(result) {
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
                fibonacci: "ERROR"
            };
        return reply.view('index', context);
        });
    });

};