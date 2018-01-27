import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, "background")
    this.scale.x = 0.43
    this.scale.y = 0.43
    this.anchor.setTo(0.5)
  }
}
