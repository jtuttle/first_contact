import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y }) {
    super(game, x, y, "signal_icon")

    this.scale.x = 0.25
    this.scale.y = 0.25
    this.anchor.setTo(0.5)
  }
}
