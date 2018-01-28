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
    this.load.spritesheet('fish', 'assets/images/fish.png', 172, 185)
    this.load.image('fish_bowl', 'assets/images/fish_bowl.png')
    this.load.image('telephone', 'assets/images/telephone.jpg')

    this.load.image('red_button', 'assets/images/red_button.jpg')
    this.load.image('screen', 'assets/images/screen.png')
    this.load.image('terminal_icon', 'assets/images/terminal_icon.png')
    this.load.image('signal_icon', 'assets/images/signal_icon.png')
    this.load.image('signal_dial', 'assets/images/dial.jpeg')

    this.load.json('story', 'assets/story.json')
  }

  create () {
    this.state.start('Game')
  }
}
