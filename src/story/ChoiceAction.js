import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.choices = data.choices
    
    var gameState = this.game.state.states[this.game.state.current]
    this.terminal = gameState.desktop.terminal

    this.choiceChar = '>'
  }

  onEnable() {
    super.onEnable()

    this.terminal.onBufferEmptySignal.addOnce(this.addClickListeners, this)
    
    this.choices.forEach(function(choice) {
      this.terminal.addText(this.choiceChar + " " + choice.line + "\n\n")
    }, this)
  }

  onComplete() {
    this.terminal.lines.forEach(function(line) {
      line.events.onInputDown.removeAll()
      line.inputEnabled = false
    }, this)

    super.onComplete()
  }

  addClickListeners() {
    var currentChoice = this.choices.length
    var lines = this.terminal.lines

    for(var i = lines.length - 1; i >= 0; i--) {
      console.log(currentChoice)
      if(currentChoice > 0) {
        var line = lines[i]
        
        if(line.text != '') {
          line.inputEnabled = true
          line.input.useHandCursor = true;
          line.events.onInputDown.addOnce(
            this.onChoiceClick, this, 0, currentChoice
          )
        }

        if(line.text[0] == this.choiceChar) {
          currentChoice--
        }
      }
    }
  }

  onChoiceClick(choiceAction, pointer, choiceIndex) {    
    var choice = this.choices[choiceIndex - 1]
    this.game.PLAYER_SCORE += choice.score

    this.onComplete()
  }
}
