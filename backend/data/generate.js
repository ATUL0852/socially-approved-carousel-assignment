// One-off generator for dummy video data. Run once with `node generate.js`
// to produce videos.json. Not used at runtime by the server.
const fs = require('fs');
const path = require('path');

// Publicly hosted, freely usable sample MP4s (Google's long-standing test
// video bucket — commonly used for player/demo purposes). Cycled through
// to populate 30 "Socially Approved" style entries.
const sampleVideos = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
];

const names = [
  'Aarav Sharma', 'Priya Mehta', 'Rohan Kapoor', 'Sneha Iyer', 'Vikram Singh',
  'Anjali Rao', 'Karan Malhotra', 'Diya Patel', 'Arjun Nair', 'Ishita Verma',
  'Aditya Joshi', 'Meera Pillai', 'Sanjay Gupta', 'Tanvi Desai', 'Rahul Bhatt',
  'Pooja Reddy', 'Nikhil Saxena', 'Kavya Menon', 'Yash Chawla', 'Riya Bose',
  'Devansh Trivedi', 'Sakshi Agarwal', 'Manish Tiwari', 'Aishwarya Pawar',
  'Harsh Vora', 'Neha Kulkarni', 'Siddharth Rana', 'Tanya Khanna',
  'Abhishek Yadav', 'Simran Chopra',
];

const blurbs = [
  'absolutely loved the fit and finish, ordering again next week!',
  'fast delivery and the product matched the video exactly.',
  'great quality for the price, my whole family is hooked now.',
  'this is the third time I am buying — never disappoints.',
  'packaging was great and customer support replied within minutes.',
  'used it for two weeks now, genuinely impressed with the durability.',
  'my friends keep asking where I got this from!',
  'exactly as shown, no surprises, very happy customer here.',
  'the unboxing experience alone made it worth it.',
  'switched from another brand and this is so much better.',
];

const videos = Array.from({ length: 30 }, (_, i) => {
  const id = `vid_${String(i + 1).padStart(3, '0')}`;
  const name = names[i % names.length];
  return {
    id,
    title: `${name} on their recent order`,
    description: `"${blurbs[i % blurbs.length]}"`,
    username: name,
    avatar: `https://i.pravatar.cc/80?u=${encodeURIComponent(id)}`,
    thumbnail: `https://picsum.photos/seed/${id}/360/640`,
    url: sampleVideos[i % sampleVideos.length],
    likes: Math.floor(40 + Math.random() * 460),
    shares: Math.floor(Math.random() * 60),
    comments: [],
  };
});

fs.writeFileSync(
  path.join(__dirname, 'videos.json'),
  JSON.stringify(videos, null, 2)
);

console.log(`Wrote ${videos.length} videos to videos.json`);
