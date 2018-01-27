import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, "soylent")

    this.scale.x = 0.3
    this.scale.y = 0.3
    this.anchor.setTo(0.5)
  }
}
