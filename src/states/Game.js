/* globals __DEV__ */
import Phaser from 'phaser'

import StoryEngine from '../story/StoryEngine'

import Background from '../sprites/Background'
import Soylent from '../sprites/Soylent'

import Terminal from '../ui/Terminal'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.background = new Background({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'background'
    })

    this.background.scale.x = 0.43
    this.background.scale.y = 0.43
    this.game.add.existing(this.background)

    this.soylent = new Soylent({
      game: this.game,
      x: 100,
      y: this.world.height - 100,
      asset: 'soylent'
    })
    this.soylent.scale.x = 0.3
    this.soylent.scale.y = 0.3
    this.game.add.existing(this.soylent)


    this.terminal = new Terminal({
      game: this,
      lineCount: 12,
      lineCharWidth: 50,
    })

    this.terminal.x = 250
    this.terminal.y = 100

    this.game.add.existing(this.terminal)

    

    this.storyEngine = new StoryEngine({
      game: this.game,
      storyJson: game.cache.getJSON('story')
    });
    this.storyEngine.loadStory()
    this.storyEngine.enableNodes()
  }

  update() {

  }

  render() {

  }
}
