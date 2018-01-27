/* globals __DEV__ */
import Phaser from 'phaser'
import Monitor from '../sprites/Monitor'
import Choice from '../model/Choice'
import Terminal from '../model/Terminal'
import Monologue from '../model/Monologue'
import StoryEngine from '../story/StoryEngine'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.monitor = new Monitor({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'monitor'
    })

    this.monitor.scale.x = 0.5
    this.monitor.scale.y = 0.5
    this.game.add.existing(this.monitor)


    
    this.storyEngine = new StoryEngine({
      game: this.game,
      storyJson: game.cache.getJSON('story')
    });
    this.storyEngine.loadStory()
    this.storyEngine.enableNodes()


    
    
/*
    this.monologue = new Monologue({
      game: this,
      line: "It's a monologue",
      onClick: this.onMonologueClick
    })
*/
/*    
    this.terminal = new Terminal({
      game: this,
      lines: [
        "line 1",
        "line 2",
        "line 3",
        "line 4",
      ]
    })

    this.terminal.centerY = 100

    this.game.add.existing(this.terminal)
*/

/*
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

    this.choice.centerX = 350
    this.choice.centerY = 100

    this.game.add.existing(this.choice)
*/
  }

  render () {
    if (__DEV__) {
//      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }

  onMonologueClick(text, pointer) {
    console.log("monologue")
  }

  onClick(text, pointer, option) {
    console.log(option)
  }
}
