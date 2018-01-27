/* globals __DEV__ */
import Phaser from 'phaser'

import StoryEngine from '../story/StoryEngine'

import Monitor from '../sprites/Monitor'
import Soylent from '../sprites/Soylent'

import Choice from '../model/Choice'
import Terminal from '../model/Terminal'
import Monologue from '../model/Monologue'

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
    

    this.soylent = new Soylent({
      game: this.game,
      x: 100,
      y: this.world.height - 100,
      asset: 'soylent'
    })
    this.soylent.scale.x = 0.3
    this.soylent.scale.y = 0.3
    this.game.add.existing(this.soylent)

/*    
    this.storyEngine = new StoryEngine({
      game: this.game,
      storyJson: game.cache.getJSON('story')
    });
    this.storyEngine.loadStory()
    this.storyEngine.enableNodes()
*/


    
    

    this.terminal = new Terminal({
      game: this,
      lineCount: 10,
      lineCharWidth: 28,
    })

    this.terminal.x = 130
    this.terminal.y = 80

    this.game.add.existing(this.terminal)

    
    
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

  update() {

  }

  render() {
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
