const crypto = require('crypto');

function sha1Encode(data) {

     var generator = crypto.createHash('sha1');
     generator.update( data )  
     return generator.digest('hex')

    // To be implemented!
}

module.exports.digestAuth = (request, response, next) => {

    const authorization = request.headers.authorization;
    console.log('authorization ', authorization);
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const [login, password] = decoded.split(':');
    if (login === 'node' && password === sha1Encode('password')) return next();
    response.sendStatus(401);

    // To be implemented!
}