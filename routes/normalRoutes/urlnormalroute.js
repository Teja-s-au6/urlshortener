const express = require('express');
const router = express.Router();
const urlNormalController = require('../../controllers/normalcontroller/urlnormalcontroller');
const authenticate = require('../../middlewares/authenticate');
const Url = require("../../models/Url");

router.get('/allshorturl', authenticate, urlNormalController.getUrls);

router.get('/shorturl/create', authenticate, urlNormalController.createUrl);

router.get('/:code', async (req, res) => {
    try {
      const url = await Url.findOne({ urlCode: req.params.code });
  
      if (url) {
        return res.redirect(url.originalUrl);
      } else {
        return res.status(404).json('No url found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  });

module.exports = router;