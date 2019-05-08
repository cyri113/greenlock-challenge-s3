module.exports.remove = (opts, options, s3) => {
    challengeKey = options.directory + opts.challenge.token;
    return s3.deleteObject({ Key: challengeKey, Bucket: options.bucketName }).promise().then(function (data) {
        console.log('Successfully deleted challenge.');
        return data;
    }).catch(function (err) {
        console.error('There was an error deleting your challenge: ', err.message);
        throw err;
    });
}