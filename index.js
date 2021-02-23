function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function f() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}