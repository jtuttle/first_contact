import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, "soylent")
    this.anchor.setTo(0.5)
  }
}
