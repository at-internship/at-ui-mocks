const { Router } = require('express');
const router = Router();

// Controllers
const { renderIndex, renderAbout, renderNotifications } = require("../controllers/index.controller");

router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/notifications', renderNotifications);

module.exports = router;