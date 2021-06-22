
const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],  //jwt libary eken gatte
        isRevoked : isRevoked
    }).unless({
        path: [
            {
                url: /\/public\/uploads(.*)/,
                methods: ['GET', 'OPTIONS']
            },
            {url: /\/api\/v1\/clinics(.*)/ , methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS']},
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    }
    )
}

async function isRevoked(req, payload, done) {
    if (!payload.isAdmin) {
        done(null, true)
    }
    done(); 
}

module.exports = authJwt; 
