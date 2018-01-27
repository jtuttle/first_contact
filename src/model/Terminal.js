import Phaser from 'phaser'
import AdvancingText from './AdvancingText'

export default class extends Phaser.Group {
  constructor({ game, lines }) {
    super(game)

    this.lines = lines
    this.lineIndex = -1

    this.texts = []
    this.currentText = null
  }

  update() {
    if(this.lineIndex >= this.lines.length) { return }
    
    if(this.currentText == null || this.currentText.textIndex >= this.lines[this.lineIndex].length) {
      this.lineIndex += 1
      this.textIndex = 0

      if(this.lineIndex < this.lines.length) {
        var y = this.lineIndex * 50

        this.currentText = new AdvancingText({
          game: this.game,
          group: this,
          line: this.lines[this.lineIndex],
          y: y
        })
        this.texts.push(this.currentText)
      }
    } else {
      this.currentText.next()
    }
  }
}
