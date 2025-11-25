const videos = [
  {
    video: "./Assets/video1.mp4",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    username: "aarav.travels",
    isFollowed: true,
    caption: "Golden hour in the city ✨ #sunsetvibes #travelgram #wanderlust",
    likeCount: 1850,
    commentCount: 112,
    shareCount: 48,
    isLiked: false
  },
  {
    video: "./Assets/video2.mp4",
    profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    username: "meera.codes",
    isFollowed: true,
    caption: "Building cool things with clean code 💻✨ #codinglife #javascript #devlife",
    likeCount: 940,
    commentCount: 61,
    shareCount: 20,
    isLiked: true
  },
  {
    video: "./Assets/video3.mp4",
    profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    username: "fitness_arjun",
    isFollowed: false,
    caption: "Work hard, stay consistent 💪🔥 #fitnessjourney #motivation #gymvibes",
    likeCount: 6200,
    commentCount: 309,
    shareCount: 118,
    isLiked: false
  },
  {
    video: "./Assets/video4.mp4",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    username: "foodie_ria",
    isFollowed: false,
    caption: "Nothing beats good street food 😍🍜 #foodlover #foodie #delhifood",
    likeCount: 2570,
    commentCount: 149,
    shareCount: 63,
    isLiked: true
  },
  {
    video: "./Assets/video5.mp4",
    profilePic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    username: "tech.vish",
    isFollowed: false,
    caption: "Testing this new gadget… absolutely insane! 🤯⚡ #techreview #gadgets #innovation",
    likeCount: 820,
    commentCount: 37,
    shareCount: 16,
    isLiked: false
  },
  {
    video: "./Assets/video6.mp4",
    profilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    username: "style_with_kiara",
    isFollowed: true,
    caption: "Minimal style, maximum confidence ✨👗 #ootd #fashionblogger #styleinspo",
    likeCount: 3020,
    commentCount: 178,
    shareCount: 59,
    isLiked: true
  },
  {
    video: "./Assets/video7.mp4",
    profilePic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    username: "music_by_rahul",
    isFollowed: false,
    caption: "Lost in the melody 🎵✨ #musicianlife #indiemusic #vibes",
    likeCount: 1980,
    commentCount: 132,
    shareCount: 40,
    isLiked: false
  },
  {
    video: "./Assets/video8.mp4",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    username: "nature_ayesha",
    isFollowed: false,
    caption: "Nature heals the soul 🌿💚 #naturephotography #earthmagic #greenescape",
    likeCount: 4270,
    commentCount: 256,
    shareCount: 92,
    isLiked: false
  },
  {
    video: "./Assets/video9.mp4",
    profilePic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    username: "urban_clicks",
    isFollowed: true,
    caption: "Street photography with a mood 🖤📸 #streetshots #urbanlife #cityvibes",
    likeCount: 1590,
    commentCount: 88,
    shareCount: 33,
    isLiked: true
  },
  {
    video: "./Assets/video10.mp4",
    profilePic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    username: "gaming_with_veer",
    isFollowed: false,
    caption: "Late-night grind mode 🎮🔥 #gamerlife #setupgoals #proplayer",
    likeCount: 2650,
    commentCount: 201,
    shareCount: 75,
    isLiked: true
  }
];

let sum = '';
let reelcontainer = document.querySelector(".reelcontainer");
videos.forEach((elem) => {

    sum = sum + `<div class="reels">
                <video autoplay muted loop src="${elem.video}"></video>
                <div class="userdetails">
                    <img src="${elem.profilePic}"
                        alt="" srcset="">
                    <h4 class="username">${elem.username}</h4>
                    <button class="btn">${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                </div>
                <div class="caption">
                    <h4>${elem.caption}</h4>
                </div>
                <div class="interectoptions">
                    <div class="like">
                        <h4>${elem.isLiked ? '<i class="likefilled ri-heart-fill"></i>' : '<i class="likeunfilled ri-heart-line"></i>'}</h4>
                        <h4>${elem.likeCount}</h4>
                    </div>
                    <div class="comment">
                        <h4><i class="ri-chat-3-line"></i></h4>
                        <h4>${elem.commentCount}</h4>
                    </div>
                    <div class="share">
                        <h4><i class="ri-share-forward-line"></i></h4>
                        <h4>${elem.shareCount}</h4>
                    </div>
                    <div class="menu">
                        <h4><i class="ri-more-2-fill"></i></h4>
                    </div>
                </div>
            </div>`
});
reelcontainer.innerHTML = sum;
