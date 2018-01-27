/* globals __DEV__ */
import Phaser from 'phaser'

import StoryEngine from '../story/StoryEngine'

import Background from '../sprites/Background'
import Soylent from '../sprites/Soylent'

import Desktop from '../ui/Desktop'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.background = new Background({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY
    })
    this.game.add.existing(this.background)

    this.soylent = new Soylent({
      game: this.game,
      x: 100,
      y: this.world.height - 100
    })
    this.game.add.existing(this.soylent)


    this.desktop = new Desktop({
      game: this.game
    })
    this.desktop.x = 250
    this.desktop.y = 100
    this.game.add.existing(this.desktop)
    

    

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
