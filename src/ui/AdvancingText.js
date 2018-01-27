import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor({ game, line, y = 0 }) {
    super(game)

    this.text = game.add.text(0, y, '', {
      font: '40px Arial',
      fill: '#77BFA3',
      smoothed: false
    }, this)

    this.line = line
    this.textIndex = 0
  }

  destroy() {
    this.text.destroy()
  }

  setText(line) {
    this.text.text = line
    this.text.updateText()
    this.text.x = -this.text.width * 0.5
    this.text.text = ''
    /*
    
    

    
    */

    

    this.text.text = ""
    this.line = line
    this.textIndex = 0
  }

  next() {
    if(this.line !== undefined && this.textIndex < this.line.length) {
      this.text.text = this.text.text.concat(this.line[this.textIndex])
      this.textIndex += 1
    }
  }

  done() {
    return this.textIndex >= this.line.length
  }
}
