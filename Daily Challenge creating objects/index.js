class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  const video1 = new Video('JavaScript Tutorial', 'John Doe', 3600);
video1.watch(); // John Dow watched the new video of 3600 sec

const video2 = new Video('React Tutorial', 'Jane Smith', 5400);
video2.watch(); // Jane smith wtch the new video of 5400sec
const videoData = [
    { title: 'JavaScript Tutorial', uploader: 'John Doe', time: 3600 },
    { title: 'React Tutorial', uploader: 'Jane Smith', time: 5400 },
    { title: 'HTML Tutorial', uploader: 'Bob Johnson', time: 2400 },
    { title: 'CSS Tutorial', uploader: 'Alice Brown', time: 3000 },
    { title: 'Node.js Tutorial', uploader: 'Mike Davis', time: 4200 }
  ];
  videoData.forEach((video) => {
    const newVideo = new Video(video.title, video.uploader, video.time);
    newVideo.watch();
  });




//John Doe watched all 3600 seconds of JavaScript Tutorial!
//Jane Smith watched all 5400 seconds of React Tutorial!
//Bob Johnson watched all 2400 seconds of HTML Tutorial!
//Alice Brown watched all 3000 seconds of CSS Tutorial!
//Mike Davis watched all 4200 seconds of Node.js Tutorial!//