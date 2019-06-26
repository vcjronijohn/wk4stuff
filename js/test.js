function pow(base, exponent) {

    var result = 1;

    for (let counter = 0; counter < exponent; counter++) {
        result *= base;
    }

    return result;
}

function sqrt(base) {

    //1. Loop through 0 -> whatever step 1 equals
    for (var i = 0; i < base; i++) {

        //2. test if number squared equals base
        if (i * i === base) {
            //3. return i
            return i;

        }
    }

}

describe("pow", function() {

    it("raises 2 to the third", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("raises 3 to the 4th", function() {
        assert.equal(pow(3, 4), 81);
    });

    it("raise to the 0th", function() {
        assert.equal(pow(5, 0), 1);
    });

    it("raise to the 1st", function() {
        assert.equal(pow(5, 1), 5);
    });
});

describe("sqrt", function() {

    it("4 square rt 2", function() {
        assert.equal(sqrt(4), 2);
    });

    it("16 square rt 4", function() {
        assert.equal(sqrt(16), 4);
    });

});