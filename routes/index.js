import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/size', (req, res) => {
    let size = 0;
    res.send({size})
});

module.exports = router;
