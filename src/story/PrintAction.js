import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.lines = data.lines
    
    var gameState = this.game.state.states[this.game.state.current]
    this.terminal = gameState.desktop.terminal
  }

  onEnable() {
    super.onEnable()

    this.terminal.setCharFrameDelay(this.data.charFrameDelay || 0)
    
    this.terminal.onBufferEmptySignal.addOnce(this.onTerminalComplete, this)
    
    this.lines.forEach(function(line) {
      this.terminal.addText(line + "\n")
    }, this)

    this.terminal.addText("\n")
  }

  onComplete() {
    this.terminal.setCharFrameDelay(0)

    super.onComplete()
  }

  onTerminalComplete(terminal) {
    this.onComplete()
  }
}
