import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.lines = data.lines
    
    var gameState = this.game.state.states[this.game.state.current]
    this.terminal = gameState.terminal
  }

  onEnable() {
    super.onEnable()

    this.terminal.onBufferEmptySignal.addOnce(this.onTerminalComplete, this)

    this.lines.forEach(function(line) {
      this.terminal.addText(line + "\n")
    }, this)
  }

  onTerminalComplete(terminal) {
    this.onComplete()
  }
}
