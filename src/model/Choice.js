import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor({ game, prompt, choices, onClick }) {
    super(game)

    this.lines = [ prompt ].concat(choices)
    this.lineIndex = -1
    this.textIndex = 0

    this.texts = []
    this.currentText = null

    this.onClick = onClick
    /*
    this.currentText = game.add.text(game.world.centerX, 80, '', {
      font: '40px Arial',
      fill: '#77BFA3',
      smoothed: false
    })
    */
  }

  update() {
    if(this.lineIndex >= this.lines.length) { return }
    
    if(this.currentText == null || this.textIndex >= this.lines[this.lineIndex].length) {
      this.lineIndex += 1
      this.textIndex = 0

      if(this.lineIndex < this.lines.length) {
        var y = this.lineIndex * 50
        var initialText = (this.lineIndex > 0) ? "- " : ""

        this.currentText = this.game.add.text(0, y, initialText, {
          font: '40px Arial',
          fill: '#77BFA3',
          smoothed: false
        }, this)
        this.texts.push(this.currentText)

        if(this.lineIndex > 0) {
          this.currentText.inputEnabled = true
          this.currentText.events.onInputDown.addOnce(
            this.onClick, this, 0, { lineIndex: this.lineIndex }
          )
        }
      }
    } else {
      var line = this.lines[this.lineIndex]
      this.currentText.text = this.currentText.text.concat(line[this.textIndex])
      this.textIndex += 1
    }
  }
}
