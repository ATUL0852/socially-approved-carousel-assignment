import { useEffect, useState } from "react";
import { getVideos } from "../api";
import OuterCarousel from "../components/OuterCarousel";

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const data = await getVideos();

                if (data.success) {
                    setVideos(data.videos);
                }
            } catch (error) {
                console.log("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="page-wrapper">
            <h3>Name :- Atul Bhardwaj</h3>

            <h1 className="section-title">
                Our Bestsellers
            </h1>

            <OuterCarousel videos={videos} />

        </div>
    );
};

export default Home;
