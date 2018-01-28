import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor({ game, lineCount, lineCharWidth }) {
    super(game)

    this.lineCharWidth = lineCharWidth

    this.lines = []
    
    for(var i = 0; i < lineCount; i++) {
      var y = i * 23
      
      var line = game.add.text(0, y, '', {
        font: '20px Courier New',
        fill: '#00FFEA',
        smoothed: false
      }, this)
      
      this.lines.push(line)
    }

//    this.textWidth = this.getTextWidth()

    this.charBuffer = []
    
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
}
