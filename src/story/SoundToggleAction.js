import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.sound = data.sound
    this.on = (data.on == "true")
  }

  onEnable() {
    super.onEnable()

    if(this.on) {
      this.game.LOOPED_SOUNDS[this.sound] = this.game.sound.play(this.sound, 1, true);
    } else {
      this.game.LOOPED_SOUNDS[this.sound].stop()
    }
  }
}
