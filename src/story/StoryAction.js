import Phaser from 'phaser'

export default class {
  constructor(game, data) {
    this.game = game
    this.data = data

    this.id = data.id
    this.prereqs = data.prereqs

    this.enabled = false
    this.completed = false

    this.onCompleteSignal = new Phaser.Signal()
  }

  onEnable() {
    this.enabled = true
    
    console.log("enabled " + this.id)
  }

  onComplete() {
    console.log("completed " + this.id)

    this.completed = true
    this.onCompleteSignal.dispatch(this)
  }
}
