import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, "background")
    this.anchor.setTo(0.5)
  }
}
