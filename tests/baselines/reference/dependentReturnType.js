//// [dependentReturnType.ts]
interface A {
    1: number;
    2: string;
}

function foo(x: 1 | 2): A[narrow x] {
    if (x === 1) {
        return 0;
    }
    else {
        return false;
    }
}

const r: number = foo(1);
const r2: string = foo(2);
const r3 = foo(undefined as any as (1 | 2));

//// [dependentReturnType.js]
"use strict";
function foo(x) {
    if (x === 1) {
        return 0;
    }
    else {
        return false;
    }
}
var r = foo(1);
var r2 = foo(2);
var r3 = foo(undefined);
