import Phaser from 'phaser'
import AdvancingText from '../ui/AdvancingText'

export default class extends Phaser.Group {
  constructor({ game, lineCount, lineCharWidth }) {
    super(game)

    this.lineCharWidth = lineCharWidth

    this.lines = []
    
    for(var i = 0; i < lineCount; i++) {
      var y = i * 23
      
      var line = game.add.text(0, y, '', {
        font: '20px Courier New',
        fill: '#77BFA3',
        smoothed: false
      }, this)
      
      this.lines.push(line)
    }

    this.charBuffer = []
  }

  update() {
    if(this.charBuffer.length > 0) {
      var lastLine = this.lastLine()
      var nextChar = this.charBuffer.shift()

      if(nextChar == "\n") {
        this.shiftLines()
      } else {
        lastLine.text = lastLine.text + nextChar

        if(lastLine.text.length == this.lineCharWidth) {
          this.shiftLines()
        }
      }
    }
  }

  addText(text) {
    this.charBuffer = this.charBuffer.concat(text.split(''))
  }
  
  shiftLines() {
    for(var i = 0; i < this.lines.length - 1; i++) {
      this.lines[i].text = this.lines[i + 1].text
    }
    this.lastLine().text = ""
  }

  lastLine() {
    return this.lines[this.lines.length - 1]
  }
}
