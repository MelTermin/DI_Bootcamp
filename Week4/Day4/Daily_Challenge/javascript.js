class Video {
  // 1
  constructor(title, uploader, time) {
      this.title = title
      this.uploader = uploader
      this.time = time
  }

  // 2
  watch() {
      console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
  }
}

// 3
const video1 = new Video('Harry Potter and Goblet of Fiew', 'lalala', 100)
v.watch()

// 4
const video2 = new Video('Scary Movie 2', 'alalal', 160)

