import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    var gameState = this.game.state.states[this.game.state.current]
    this.target = gameState[data.target]
  }

  onEnable() {
    super.onEnable()
    
    this.target.visible = true

    this.onComplete()
  }
}
