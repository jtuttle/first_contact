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
    this.target.events.onInputDown.add(
      this.onClick, this, 0
    )
  }

  onComplete() {


    super.onComplete()
  }

  onClick() {
    console.log("clickly")
  }
}
