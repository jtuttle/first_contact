import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor({ game, lines }) {
    super(game)

    this.lines = lines
    this.lineIndex = -1
    this.textIndex = 0

    this.texts = []
    this.currentText = null
  }

  update() {
    if(this.lineIndex >= this.lines.length) { return }
    
    if(this.currentText == null || this.textIndex >= this.lines[this.lineIndex].length) {
      this.lineIndex += 1
      this.textIndex = 0

      if(this.lineIndex < this.lines.length) {
        var y = this.lineIndex * 50

        this.currentText = this.game.add.text(0, y, "", {
          font: '40px Arial',
          fill: '#77BFA3',
          smoothed: false
        }, this)
        this.texts.push(this.currentText)
      }
    } else {
      var line = this.lines[this.lineIndex]
      this.currentText.text = this.currentText.text.concat(line[this.textIndex])
      this.textIndex += 1
    }
  }
}
