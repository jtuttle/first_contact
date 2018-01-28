import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.color = data.color
    this.duration = data.duration

    this.gameState = this.game.state.states[this.game.state.current]
  }

  onEnable() {
    super.onEnable()

    this.gameState.fade(this.color, this.duration)
    this.game.camera.onFadeComplete.addOnce(this.onFadeComplete, this);
  }

  onFadeComplete() {
    this.onComplete()
  }
}
