class Video {

  constructor(title, uploader, time) {
      this.title = title
      this.uploader = uploader
      this.time = time
  }


  watch() {
      console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
  }
}


const video1 = new Video('Harry Potter and Goblet of Fiew', 'lalala', 100)
video1.watch()


const video2 = new Video('Harry Potter and Half Blood Prince', 'alalal', 160)

