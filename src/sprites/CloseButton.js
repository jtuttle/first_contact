import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y }) {
    super(game, x, y, "close_btn")
    this.anchor.setTo(0.5)
  }
}
