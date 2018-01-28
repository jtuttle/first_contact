import Phaser from 'phaser'
import SignalDial from '../sprites/SignalDial'

export default class extends Phaser.Group {
  constructor({ game }) {
    super(game)

    this.signalDial = new SignalDial({
      game: this.game,
      x: 300,
      y: 150
    })
    this.add(this.signalDial)
    this.signalDial.inputEnabled = true
    this.signalDial.events.onInputDown.add(this.onSignalDialClick, this)

    this.signalSettings = ["12.3", "45.6", "78.9", "99.8"]
    this.currentSetting = 0
    
    this.onSettingChangeSignal = new Phaser.Signal()
  }

  onSignalDialClick() {
    this.signalDial.rotation = (this.currentSetting * 90) % 360
    
    this.currentSetting = (this.currentSetting + 1) % this.signalSettings.length
    var currentSetting = this.signalSettings[this.currentSetting]

    this.onSettingChangeSignal.dispatch(currentSetting)
  }
}
