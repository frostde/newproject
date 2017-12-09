'use strict';


function calculateFibonacci(number) {
    if (number < 3) {
        return 1;
    } else {
        return calculateFibonacci(number - 2) + calculateFibonacci(number - 1);
    }
}

module.exports = (req, reply) => {
    var context = {
        fibonacci: calculateFibonacci(req.params.num)
    };
    return reply.view('fibonacci', context);
};