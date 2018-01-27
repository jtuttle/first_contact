import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.prompt = data.prompt
    this.choices = data.choices
    
    var gameState = this.game.state.states[this.game.state.current]
    this.terminal = gameState.terminal
  }

  onEnable() {
    super.onEnable()

    this.terminal.addText(this.prompt)

    this.choices.forEach(function(choice) {
      this.terminal.addText("\n\n- " + choice + "")
    }, this)

    this.terminal.addText("\n")
  }
}
