import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "./Loader";

import "swiper/css";

import VideoModal from "./VideoModal";

const ReelCard = ({ video, onOpen }) => {
  const videoRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const handleEnter = () => {
    videoRef.current?.play().catch(() => { });
  };

  const handleLeave = () => {
    const el = videoRef.current;

    if (!el) return;

    el.pause();
    el.currentTime = 0;
  };

  return (
    <div
      className="reel-card"
      onClick={onOpen}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {loading && <Loader />}

      <video
        ref={videoRef}
        src={video.videoUrl}
        muted
        loop
        playsInline
        preload="metadata"
        className="reel-preview"
        onLoadedData={() => setLoading(false)}
        onWaiting={() => setLoading(true)}
        onPlaying={() => setLoading(false)}
      />
    </div>
  );
};

const OuterCarousel = ({ videos }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="outer-slider">
        <Swiper slidesPerView={4} spaceBetween={12}>
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <ReelCard
                video={video}
                onOpen={() => setSelectedIndex(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedIndex !== null && (
        <VideoModal
          videos={videos}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
};

export default OuterCarousel;
