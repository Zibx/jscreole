/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * *
 */
;// QUOKKA 2017
// By zibx on 7/12/17.
var assert = require('assert');
var creole = require('../lib/creole');
describe('should work', function () {
    it('serverside', function () {
        var w = new creole();
        assert.equal(w.parse('123'),'123');
    });

    it('serverside', function () {
        var w = new creole();
        assert.equal(w.parse('123'),'123');
    });
});