import Phaser from 'phaser'
import AdvancingText from '../ui/AdvancingText'

export default class extends Phaser.Group {
  constructor({ game, prompt, choices, onClick }) {
    super(game)

    this.lines = [ prompt ].concat(choices)
    this.lineIndex = -1

    this.texts = []
    this.currentText = null

    this.onClick = onClick
  }

  update() {
    if(this.lineIndex >= this.lines.length) { return }
    
    if(this.currentText == null || this.currentText.done()) {
      this.lineIndex += 1
      this.textIndex = 0

      if(this.lineIndex < this.lines.length) {
        var y = this.lineIndex * 50
        var initialText = (this.lineIndex > 0) ? "- " : ""

        this.currentText = new AdvancingText({
          game: this.game,
          group: this,
          line: initialText + this.lines[this.lineIndex],
          y: y
        })
        this.texts.push(this.currentText)

        if(this.lineIndex > 0) {
          this.currentText.text.inputEnabled = true
          this.currentText.text.events.onInputDown.addOnce(
            this.onClick, this, 0, { lineIndex: this.lineIndex }
          )
        }
      }
    } else {
      this.currentText.next()
    }
  }
}
