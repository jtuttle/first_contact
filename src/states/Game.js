/* globals __DEV__ */
import Phaser from 'phaser'
//import Mushroom from '../sprites/Mushroom'
import Choice from '../model/Choice'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

    this.choice = new Choice({
      game: this.game,
      prompt: "Can you hear me?",
      choices: [
        "Yes",
        "No",
        "...maybe?"
      ],
      onClick: this.onClick
    })

    this.choice.centerY = 100

    this.game.add.existing(this.choice)
    
/*
    const bannerText = 'Asking you a question...?'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Arial',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)

//    this.prompt = new Prompt
    

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)
*/
  }

  render () {
    if (__DEV__) {
//      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }

  onClick(text, pointer, option) {
    console.log(option)
  }
}
