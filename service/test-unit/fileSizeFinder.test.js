/**
 * Created by Hey on 7 Jul 2017
 */
import test from 'chai';

import fileSizeFinder from '../fileSizeFinder';

describe("fileSizeFinder", function () {
    it("should find file size of given file", function () {
        //    given
        let file = {size: 17};

        //    then
        let size = fileSizeFinder.sizeOf(file);

        //    when
        test.expect(size).to.equal(17);
    });

    it("should return error message for no attachment case", function () {
        //    given

        //    then
        let size = fileSizeFinder.sizeOf();

        //    when
        test.expect(size).to.equal("No attachment found!");
    });
});