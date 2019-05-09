const path = require("path");

module.exports.get = (opts, options, s3) => {
    let challengeKey = path.join(options.directory, opts.challenge.token);
    console.log("get", challengeKey);

    return s3.getObject({ Key: challengeKey, Bucket: options.bucketName }).promise().then(function (data) {
        console.log("Successfully retrieved challenge." + data.Body.toString());
        return {
            keyAuthorization: data.Body.toString()
        }
    }).catch(function (err) {
        console.error(err.message);
        return null;
    });
};