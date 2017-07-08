import express from 'express';
import multer  from 'multer';
import fileSizeFinder from '../service/fileSizeFinder';

let router = express.Router();
let upload = multer({dest: '/tmp'});

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/size', upload.single('file'), (req, res) => {
    let size = fileSizeFinder.sizeOf(req.file);
    res.send({size})
});

module.exports = router;
