import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.choice = data.choice
    this.lines = data.lines
    
    var gameState = this.game.state.states[this.game.state.current]
    this.terminal = gameState.desktop.terminal
  }

  onEnable() {
    super.onEnable()

    this.terminal.onBufferEmptySignal.addOnce(this.onTerminalComplete, this)

    var choiceNum = this.game.CHOICES[this.choice]
    var lineText = this.lines[choiceNum - 1]
    
    this.terminal.addText(lineText + "\n")
  }

  onTerminalComplete(terminal) {
    this.onComplete()
  }
}

