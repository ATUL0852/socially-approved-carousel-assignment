import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import VideoPlayer from "./VideoPlayer";

const VideoModal = ({
  videos,
  selectedIndex,
  onClose,
}) => {
  return (
    <div className="modal-backdrop">

      <button
        className="close-btn"
        onClick={onClose}
      >
        ✕
      </button>

      <Swiper
        modules={[Navigation]}
        navigation
        centeredSlides
        watchSlidesProgress={true}
        speed={600}
        initialSlide={selectedIndex}
        slidesPerView={1.8}
        spaceBetween={-250}
        className="modal-swiper"
      >
        {videos.map((video) => (
          <SwiperSlide
            key={video.id}
          >
            {({ isActive }) => (
              <VideoPlayer
                video={video}
                isActive={isActive}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default VideoModal;