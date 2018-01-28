/* globals __DEV__ */
import Phaser from 'phaser'

import StoryEngine from '../story/StoryEngine'

import Background from '../sprites/Background'
import Soylent from '../sprites/Soylent'
import FishBowl from '../sprites/FishBowl'
import Telephone from '../sprites/Telephone'
import RedButton from '../sprites/RedButton'
import WhiteSquare from '../sprites/WhiteSquare'

import Desktop from '../ui/Desktop'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.game.PLAYER_SCORE = 0
    this.game.CHOICES = {}
    
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

    this.fishBowl = new FishBowl({
      game: this.game,
      x: 0,
      y: 0
    })
    this.game.add.existing(this.fishBowl)


    this.fish = this.game.add.sprite(10, 280, 'fish')
    var bob = this.fish.animations.add("bob")
    this.fish.animations.play("bob", 20, true)
    this.fish.scale.setTo(0.7)

    
    this.telephone = new Telephone({
      game: this.game,
      x: 900,
      y: this.world.height - 100
    })
    this.game.add.existing(this.telephone)

    this.redButton = new RedButton({
      game: this.game,
      x: this.world.centerX + 25,
      y: this.world.centerY + 170
    })
    this.game.add.existing(this.redButton)
    
    this.desktop = new Desktop({
      game: this.game
    })
    this.desktop.x = this.game.world.centerX
    this.desktop.y = this.game.world.centerY - 10
    this.game.add.existing(this.desktop)
    this.desktop.visible = false


    this.modal = new WhiteSquare({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY
    })
    this.modal.width = this.game.world.width
    this.modal.height = this.game.world.height
    this.modal.visible = false
    this.game.add.existing(this.modal)

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

  fade(color) {
    this.FADE_COLOR = color
    this.game.camera.fade(color)
    this.game.camera.onFadeComplete.addOnce(this.onFadeComplete, this);
  }

  onFadeComplete() {
    this.modal.tint = this.FADE_COLOR
    this.FADE_COLOR = undefined
    
    this.modal.visible = true
    this.game.camera.reset()
  }
}
