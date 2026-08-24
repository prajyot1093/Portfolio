import type { MusicData } from "~/types";

export const playlist: MusicData[] = [
  {
    id: "sunflower",
    title: "Sunflower",
    artist: "Post Malone / Swae Lee",
    cover: "//p1.music.126.net/z0IO1vEsowL9mD_5yzUjeA==/109951163936068098.jpg",
    audio: "music/sunflower.mp3",
    duration: "2:38"
  },
  {
    id: "all-the-stars",
    title: "All The Stars",
    artist: "Kendrick Lamar, SZA",
    cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&auto=format&fit=crop&q=80",
    audio: "music/all-the-stars.mp3",
    duration: "3:52"
  },
  {
    id: "sweet-dreams",
    title: "Sweet Dreams (Are Made of This)",
    artist: "Weezer",
    cover: "img/music/sweet-dreams.jpg",
    audio: "music/sweet-dreams.mp3",
    duration: "3:34"
  }
];

export const music: MusicData = playlist[0];
export default music;
