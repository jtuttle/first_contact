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

    this.load.image('lentilsoy', 'assets/images/lentilsoy.png')
    this.load.image('fish_bowl', 'assets/images/fish_bowl.png')
    this.load.image('telephone', 'assets/images/telephone.png')

    this.load.image('white_square', 'assets/images/white_square.png')
    this.load.image('red_button', 'assets/images/red_button.jpg')
    this.load.image('screen', 'assets/images/screen.png')
    this.load.image('terminal_icon', 'assets/images/terminal_icon.png')
    this.load.image('signal_icon', 'assets/images/signal_icon.png')
    this.load.image('signal_dial', 'assets/images/dial.png')

    
    this.load.spritesheet('fish', 'assets/images/fish.png', 200, 200)
    this.load.spritesheet('pulse', 'assets/images/pulse.png', 181, 149)
    

    this.load.audio('beep', 'assets/sfx/PhoneDial_SingleButtonPush.ogg')
    this.load.audio('bad_ending', 'assets/sfx/Bad_Ending.ogg')
    this.load.audio('corrupted_stream', 'assets/sfx/GarbledMessage.ogg')
    this.load.audio('right_password', 'assets/sfx/RightPassword.ogg')
    this.load.audio('signal_fixed', 'assets/sfx/MovingDishintoPlace.ogg')
    this.load.audio('wrong_password', 'assets/sfx/WrongPassword.ogg')
    this.load.audio('at_last', 'assets/sfx/at_last.ogg')
    this.load.audio('plastic_chips', 'assets/sfx/plastic_chips.ogg')
    
    this.load.audio('music', 'assets/music/Music.ogg')

    this.load.json('story', 'assets/story.json')
  }

  create () {
    this.state.start('Game')
  }
}
