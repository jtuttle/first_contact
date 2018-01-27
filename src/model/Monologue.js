import Phaser from 'phaser'
import AdvancingText from '../ui/AdvancingText'

export default class extends Phaser.Group {
  constructor({ game, line }) {
    super(game)

    this.currentText = new AdvancingText({
      game: this.game,
      group: this,
      line: line,
      x: 20,
      y: this.game.world.height - 60
    })
  }

  update() {
    this.currentText.next()
  }
}
