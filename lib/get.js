module.exports.get = (opts, options, s3) => {
    let challengeKey = options.directory + opts.challenge.token;
    return s3.getObject({ Key: challengeKey, Bucket: options.bucketName }).promise().then(function (data) {
        console.log('Successfully retrieved challenge.' + data.Body.toString());
        return {
            keyAuthorization: data.Body.toString()
        }
    }).catch(function (err) {
        console.error(err.message);
        return null;
    });
}