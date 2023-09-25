const express = require('express');
const router = express.Router();

router.get("/v1", (req, res) => {
    res.json({
        project: "React and Express Boilerplate",
        from: "Vanaldito",
    });
});

module.exports = router;