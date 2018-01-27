import Phaser from 'phaser'
import CloseBtn from '../sprites/CloseButton'

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

//    this.textWidth = this.getTextWidth()

    this.charBuffer = []

    this.closeBtn = new CloseBtn({
      game: game,
//      x: this.textWidth,
      x: 580,
      y: 0
    })
    this.add(this.closeBtn)
    this.closeBtn.inputEnabled = true
    this.closeBtn.events.onInputDown.add(this.onCloseClick, this)
    this.onCloseSignal = new Phaser.Signal()
    
    this.onBufferEmptySignal = new Phaser.Signal()
  }

  update() {
    if(!this.visible || this.charBuffer.length == 0) { return }
    
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

    if(this.charBuffer.length == 0) {
      this.onBufferEmptySignal.dispatch()
    }
  }

  /*
  getTextWidth() {
    var line = this.lines[0]
    line.text = Array(this.lineCharWidth).join("X")
    line.updateText()
    
    var width = line.width
    
    line.text = ""
    line.updateText()

    return width
  }
  */
  
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

  onCloseClick() {
    this.onCloseSignal.dispatch()
  }
}
