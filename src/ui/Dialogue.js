import Phaser from 'phaser'
import AdvancingText from '../ui/AdvancingText'

export default class extends Phaser.Group {
  constructor({ game, onClick, onClickContext }) {
    super(game)
    
    this.modal = game.add.graphics(0, 0)
    this.modal.beginFill(0xFFFF00, 0)
    this.modal.bounds = new PIXI.Rectangle(0, 0, game.world.width, game.world.height)
    this.modal.drawRect(0, 0, game.world.width, game.world.height)
    this.modal.boundsPadding = 0
    this.modal.inputEnabled = true
    this.modal.events.onInputDown.add(
      onClick, onClickContext, 0
    )
    this.add(this.modal)

    this.bar = game.add.graphics(0, game.world.height - 63)
    this.bar.beginFill(0x000000, 0.8)
    this.bar.bounds = new PIXI.Rectangle(0, 0, game.world.width, 50)
    this.bar.drawRect(0, 0, game.world.width, 50)
    this.bar.boundsPadding = 0
    this.add(this.bar)
    
    this.text = new AdvancingText({
      game: game,
      y: game.world.height - 50
    })
    this.text.x = game.world.width * 0.5
  }

  destroy() {
    this.modal.destroy()
    this.bar.destroy()
    this.text.destroy()
  }
  
  setText(line) {
    this.text.setText(line)
  }

  update() {
    this.text.next()
  }
}
