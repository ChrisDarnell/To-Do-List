//jshint esversion:6

// Get Full Date
exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
};

// Get Just Day of Week
exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", options);
};