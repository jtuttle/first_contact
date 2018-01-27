import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    var gameState = this.game.state.states[this.game.state.current]
    this.target = gameState[data.target]
  }

  onEnable() {
    super.onEnable()
    
    this.target.inputEnabled = true
    this.target.events.onInputDown.addOnce(
      this.onComplete, this, 0
    )
  }
}
