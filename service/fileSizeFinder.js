/**
 * Created by Hey on 7 Jul 2017
 */

module.exports = {
    "sizeOf": function (file) {
        if (typeof file === "undefined"){
            return "No attachment found!";
        }
        return file.size;
    }
};