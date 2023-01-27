import { Howl } from 'howler'

export class Audio {
  private path: string
  private hasLoop: boolean
  private volume: number
  private audio: Howl

  constructor(path: string, hasLoop: boolean = false, volume: number = 0.5) {
    this.path = path
    this.hasLoop = hasLoop
    this.volume = volume
  }

  public play(): void {
    this.audio = new Howl({
      src: [this.path],
      loop: this.hasLoop,
      volume: this.volume,
      html5: true,
    })

    this.audio.play()
  }
  public stop(): void {
    this.audio.stop()
  }

  public fadeOut(): void {
    this.audio.fade(0.5, 0, 2000)
  }
  public fadeIn(): void {
    this.audio.fade(0, 0.5, 1000)
  }
}
