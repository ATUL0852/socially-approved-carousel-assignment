const express = require("express");

const {
    getVideos,
    likeVideo,
    unlikeVideo,
    shareVideo
} = require("./videoController");

const router = express.Router();

router.get("/videos", getVideos);

router.post("/like", likeVideo);
router.post("/unlike", unlikeVideo);

router.post("/share", shareVideo);

module.exports = router;