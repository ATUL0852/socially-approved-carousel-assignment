const fs = require("fs");
const path = require("path");

const videoFilePath = path.join(__dirname, "../../data/videos.json");

const getVideos = (req, res) => {

    const videos = JSON.parse(
        fs.readFileSync(
            videoFilePath,
            "utf8"
        )
    );

    res.status(200).json({
        success: true,
        count: videos.length,
        videos
    });
};

const likeVideo = (req, res) => {
    const { videoId } = req.body;

    const videos = JSON.parse(fs.readFileSync(videoFilePath, "utf8"));

    const video = videos.find((v) => v.id === Number(videoId));

    if (!video) {
        return res.status(404).json({
            success: false,
            message: "Video not found"
        });
    }

    video.likes += 1;

    fs.writeFileSync(videoFilePath, JSON.stringify(videos, null, 2));

    res.status(200).json({
        success: true,
        likes: video.likes
    });
};

const unlikeVideo = (req, res) => {
    const { videoId } = req.body;

    const videos = JSON.parse(
        fs.readFileSync(
            videoFilePath,
            "utf8"
        )
    );
    const video = videos.find((v) => v.id === Number(videoId));

    if (!video) {
        return res.status(404).json({
            success: false,
            message: "Video not found"
        });
    }

    video.likes = Math.max(video.likes - 1, 0
    );

    fs.writeFileSync(videoFilePath, JSON.stringify(videos, null, 2));
    res.status(200).json({ success: true, likes: video.likes });

};



const shareVideo = (req, res) => {
    const { videoId } = req.body;

    const videos = JSON.parse(fs.readFileSync(videoFilePath, "utf8"));

    const video = videos.find((v) => v.id === Number(videoId));

    if (!video) {
        return res.status(404).json({
            success: false,
            message: "Video not found"
        });
    }
    video.shares += 1;

    fs.writeFileSync(
        videoFilePath,
        JSON.stringify(videos, null, 2)
    );

    res.status(200).json({
        success: true,
        shares: video.shares
    });
};



module.exports = {
    getVideos,
    likeVideo,
    shareVideo,
    unlikeVideo
};