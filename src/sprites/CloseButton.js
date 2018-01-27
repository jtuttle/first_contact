import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y }) {
    super(game, x, y, "close_btn")
    
    this.scale.x = 0.06
    this.scale.y = 0.06
    this.anchor.setTo(0.5)
  }
}
