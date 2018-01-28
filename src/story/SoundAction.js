import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.sfx = data.sfx
  }

  onEnable() {
    super.onEnable()

    this.game.sound.play(this.sfx);
  }
}
