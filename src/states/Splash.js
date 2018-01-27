import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    
    //
    // load your assets
    //
    this.load.image('background', 'assets/images/background.png')
    this.load.image('soylent', 'assets/images/soylent.jpg')
    this.load.image('close_btn', 'assets/images/close_btn.jpg')

    this.load.json('story', 'assets/story.json')
  }

  create () {
    this.state.start('Game')
  }
}
