/**
 * Created by Hey on 7 Jul 2017
 */

export default {
    "sizeOf": function (file) {
        if (typeof file === "undefined") {
            return "No attachment found!";
        }
        return file.size;
    }
};