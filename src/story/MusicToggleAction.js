import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.on = (data.on == "true")
  }

  onEnable() {
    super.onEnable()

    if(this.on) {
      this.game.MUSIC = this.game.sound.play("music", 1, true);
    } else {
      this.game.MUSIC.stop()
    }
  }
}
