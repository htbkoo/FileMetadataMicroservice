import express from 'express';
let router = express.Router();

import serverHostNameFormatter from "../service/serverHostNameFormatter";

function getFullHostNameFromReq(req) {
    return serverHostNameFormatter.appendProtocolToHostName(req.headers.host);
}

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        "serverHostNameWithProtocol": getFullHostNameFromReq(req)
    });
});

router.post('/size', (req, res) => {
    let size = 0;
    res.send({size})
});

module.exports = router;
