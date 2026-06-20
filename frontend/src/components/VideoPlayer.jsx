import { useEffect, useRef, useState } from "react";
import useVideoObserver from "../hooks/useVideoObserver";
import Loader from "./Loader";

import {
  FaHeart,
  FaShare,
  FaShoppingCart,
  FaShoppingBag,
  FaVolumeMute,
  FaVolumeUp,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { likeVideo, unlikeVideo, shareVideo } from "../api";

const VideoPlayer = ({ video, isActive }) => {
  const videoRef = useRef();

  const [muted, setMuted] = useState(true);
  const [likes, setLikes] = useState(video.likes || 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(() => {
    const likedVideos =
      JSON.parse(localStorage.getItem("likedVideos") || "[]");
    return likedVideos.includes(video.id);
  });


  const isVisible = useVideoObserver(videoRef);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive) {
      el.play()
        .then(() => setIsPlaying(true))
        .catch(() => { });
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  // Toggle play/pause when the video is clicked
  const togglePlayPause = () => {
    const el = videoRef.current;

    if (!el) return;

    if (el.paused) {
      el.play();
      setIsPlaying(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };


  const handleTimeUpdate = () => {
    const el = videoRef.current;

    if (!el) return;

    const percent =
      (el.currentTime /
        el.duration) *
      100;

    setProgress(percent || 0);
  };


  // Toggle mute/unmute when the mute button is clicked
  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setMuted(newMuted);
  };


  // Handle like button click
  const handleLike = async () => {
    try {
      if (liked) {
        const response = await unlikeVideo(video.id);

        if (response.success) {
          setLiked(false);
          setLikes(response.likes);
        }

      } else {
        const response = await likeVideo(video.id);

        if (response.success) {
          setLiked(true);
          setLikes(response.likes);
        }
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // clipboard may be blocked in some browsers/contexts — non-fatal
    }
    try {
      await shareVideo(video.id);
    } catch {
      // dummy API — non-fatal
    }
  };


  return (
    <div className="modal-video-wrapper">
      <div className="progress-wrapper">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {
        loading && isVisible && (
          <Loader />
        )
      }
      <video
        ref={videoRef}
        src={
          isVisible
            ? video.videoUrl
            : ""
        }
        loop
        muted={muted}
        playsInline
        preload={isActive ? "auto" : "metadata"}
        className="modal-video"
        onClick={togglePlayPause}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={() =>
          setLoading(false)
        }
        onWaiting={() =>
          setLoading(true)
        }
        onPlaying={() =>
          setLoading(false)
        }
      />

      <button className="mute-btn" onClick={toggleMute}>
        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      <div className="right-actions">
        <button
          className="action-btn"
          onClick={handleLike}
          style={{ color: liked ? "#ff3040" : "#ffffff" }}
        >
          <FaHeart />
          <span>{likes}</span>
        </button>

        <button className="action-btn" onClick={handleShare}>
          <FaShare />
        </button>

        <button className="action-btn">
          <FaShoppingCart />
        </button>
      </div>

    </div>
  );
};

export default VideoPlayer;
