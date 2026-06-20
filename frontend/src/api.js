const BASE_URL = "https://socially-approved-carousel-assignment.onrender.com/api";

export const getVideos = async () => {
  const response = await fetch(`${BASE_URL}/videos`);
  return response.json();
};

export const likeVideo = async (videoId) => {
  const response = await fetch(`${BASE_URL}/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoId }),
  });

  return response.json();
};

export const unlikeVideo = async (
  videoId
) => {

  const response = await fetch("http://localhost:5000/api/unlike",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({ videoId }),
    }
  );

  return response.json();
};


export const shareVideo = async (videoId) => {
  const response = await fetch(`${BASE_URL}/share`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoId,
      platform: "copy-link",
    }),
  });

  return response.json();
};
