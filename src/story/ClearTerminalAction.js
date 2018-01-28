import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    var gameState = this.game.state.states[this.game.state.current]
    this.terminal = gameState.desktop.terminal
  }

  onEnable() {
    super.onEnable()

    this.terminal.clearText()

    this.onComplete()
  }
}
