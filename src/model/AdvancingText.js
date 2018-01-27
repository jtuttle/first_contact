import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor({ game, group, line, y }) {
    super(game)

    this.text = game.add.text(0, y, "", {
      font: '40px Arial',
      fill: '#77BFA3',
      smoothed: false
    }, group)

    this.line = line

    this.textIndex = 0
  }

  next() {
    this.text.text = this.text.text.concat(this.line[this.textIndex])
    this.textIndex += 1
  }
}
