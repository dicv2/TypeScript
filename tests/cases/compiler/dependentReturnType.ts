// @strict: true

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