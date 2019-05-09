const path = require("path");

module.exports.set = (opts, options, s3) => {
    let challengeKey = path.join(options.directory, opts.challenge.token);
    console.log("set", challengeKey);

    return s3.putObject({ Key: challengeKey, Body: opts.challenge.keyAuthorization, Bucket: options.bucketName }).promise().then(function (data) {
        console.log("Successfully created challenge.");
        return null;
    }).catch(function (err) {
        console.error("There was an error creating your challenge: " + err.message);
        throw err;
    });
};