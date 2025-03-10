const { fakultet } = require('./fakultet.js');

const test = require('node:test');

const assert = require("node:assert");


test('fakultet av 5 er 120', () => {
    assert.strictEqual(fakultet(5), 120);
})
