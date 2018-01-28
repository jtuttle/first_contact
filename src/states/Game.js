/* globals __DEV__ */
import Phaser from 'phaser'

import StoryEngine from '../story/StoryEngine'

import Background from '../sprites/Background'
import Lentilsoy from '../sprites/Lentilsoy'
import FishBowl from '../sprites/FishBowl'
import Telephone from '../sprites/Telephone'
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

    this.pulse = this.game.add.sprite(this.world.centerX - 68, this.world.centerY + 80, 'pulse')
    var pulse = this.pulse.animations.add("pulse")
    this.pulse.animations.play("pulse", 20, true)
    
    this.lentilsoy = new Lentilsoy({
      game: this.game,
      x: 230,
      y: this.world.height - 140
    })
    this.game.add.existing(this.lentilsoy)

    this.fishBowl = new FishBowl({
      game: this.game,
      x: 0,
      y: 0
    })
    this.fishBowl.y = 260
    this.game.add.existing(this.fishBowl)

    this.fish = this.game.add.sprite(10, 280, 'fish')
    var bob = this.fish.animations.add("bob")
    this.fish.animations.play("bob", 20, true)
    this.fish.scale.setTo(0.7)
    
    this.telephone = new Telephone({
      game: this.game,
      x: 950,
      y: this.world.height - 240
    })
    this.game.add.existing(this.telephone)

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

  fade(color, duration) {
    this.FADE_COLOR = color
    
    this.game.camera.onFadeComplete.addOnce(this.onFadeComplete, this);
    this.game.camera.fade(color, duration)
  }

  onFadeComplete() {
    this.modal.tint = this.FADE_COLOR
    this.FADE_COLOR = undefined
    
    this.modal.visible = true
    this.game.camera.reset()
  }
}
