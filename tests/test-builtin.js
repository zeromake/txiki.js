import assert from 'tjs:assert';

function test_number()
{
    assert.eq(parseInt("123"), 123);
    assert.eq(parseInt("  123r"), 123);
    assert.eq(parseInt("0x123"), 0x123);
    assert.eq(parseInt("0o123"), 0);
    assert.eq(+"  123   ", 123);
    assert.eq(+"0b111", 7);
    assert.eq(+"0o123", 83);
    assert.eq(parseFloat("0x1234"), 0);
    assert.eq(parseFloat("Infinity"), Infinity);
    assert.eq(parseFloat("-Infinity"), -Infinity);
    assert.eq(parseFloat("123.2"), 123.2);
    assert.eq(parseFloat("123.2e3"), 123200);
    assert.ok(Number.isNaN(Number("+")));
    assert.ok(Number.isNaN(Number("-")));
    assert.ok(Number.isNaN(Number("\x00a")));

    assert.eq((26).toExponential(0), "3e+1");
    assert.eq((-26).toExponential(0), "-3e+1");
    assert.eq((25).toExponential(0), "3e+1");
    assert.eq((-25).toExponential(0), "-3e+1");
    assert.eq((24).toExponential(0), "2e+1");
    assert.eq((-24).toExponential(0), "-2e+1");

    assert.eq((2.6).toPrecision(1), "3");
    assert.eq((-2.6).toPrecision(1), "-3");
    assert.eq((2.5).toPrecision(1), "3");
    assert.eq((-2.5).toPrecision(1), "-3");
    assert.eq((-2.4).toPrecision(1), "-2");
    assert.eq((2.4).toPrecision(1), "2");

    assert.eq((1.126).toFixed(2), "1.13");
    assert.eq((-1.126).toFixed(2), "-1.13");
    assert.eq((1.125).toFixed(2), "1.13");
    assert.eq((-1.125).toFixed(2), "-1.13");
    assert.eq((1.124).toFixed(2), "1.12");
    assert.eq((-1.124).toFixed(2), "-1.12");

    
    assert.eq((1000000006).toExponential(8), "1.00000001e+9");
    assert.eq((-1000000006).toExponential(8), "-1.00000001e+9");
    assert.eq((1000000005).toExponential(8), "1.00000001e+9");
    assert.eq((-1000000005).toExponential(8), "-1.00000001e+9");
    assert.eq((1000000004).toExponential(8), "1.00000000e+9");
    assert.eq((-1000000004).toExponential(8), "-1.00000000e+9");

    assert.eq((0.000001000000064).toExponential(7), "1.0000001e-6");
    assert.eq((-0.000001000000064).toExponential(7), "-1.0000001e-6");
    assert.eq((0.000001000000054).toExponential(7), "1.0000001e-6");
    assert.eq((-0.000001000000054).toExponential(7), "-1.0000001e-6");
    assert.eq((0.000001000000044).toExponential(7), "1.0000000e-6");
    assert.eq((-0.000001000000044).toExponential(7), "-1.0000000e-6");

    assert.eq((1.000000006).toFixed(8), "1.00000001");
    assert.eq((-1.000000006).toFixed(8), "-1.00000001");
    assert.eq((1.000000005).toFixed(8), "1.00000001");
    assert.eq((-1.000000005).toFixed(8), "-1.00000001");
    assert.eq((1.000000004).toFixed(8), "1.00000000");
    assert.eq((-1.000000004).toFixed(8), "-1.00000000");
}

test_number()