import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, "screen")
    
    this.scale.x = 1
    this.scale.y = 1
    this.anchor.setTo(0.5)
  }
}
