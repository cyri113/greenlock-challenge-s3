const path = require("path");

module.exports.remove = (opts, options, s3) => {
    let challengeKey = path.join(options.directory, opts.challenge.token);
    console.log("remove", challengeKey);

    return s3.deleteObject({ Key: challengeKey, Bucket: options.bucketName }).promise().then(function (data) {
        console.log("Successfully deleted challenge.");
        return data;
    }).catch(function (err) {
        console.error("There was an error deleting your challenge: ", err.message);
        throw err;
    });
};