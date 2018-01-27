import Phaser from 'phaser'

export default class {
  constructor(game, data) {
    this.game = game
    this.data = data

    this.id = data.id
    this.prereqs = data.prereqs

    this.onCompleteSignal = new Phaser.Signal()
  }

  onEnable() {
    console.log("enabled " + this.id)
  }

  onComplete() {
    console.log("completed " + this.id)

    this.onCompleteSignal.dispatch(this)    
  }
}
