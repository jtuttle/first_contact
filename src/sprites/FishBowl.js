import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, "fish_bowl")

    this.scale.x = 1
    this.scale.y = 1
  }
}
