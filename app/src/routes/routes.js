const router = require('express').Router();

router.get('/', (req, res) => res.json(
    {
        "server": "on",
        "ht_status": 200
    })
);

router.use((req, res) => res.json({
        "server": "On",
        "ht_status": 404
    })
);

module.exports = router;
