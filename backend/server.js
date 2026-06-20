const express = require("express");
const cors = require("cors");

const videoRoutes = require("./src/VideosModule/videoRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/videos", express.static("public/videos"));

app.use("/api", videoRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});