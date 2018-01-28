import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, "telephone")

    this.scale.x = 0.5
    this.scale.y = 0.5
    this.anchor.setTo(0.5)
  }
}
