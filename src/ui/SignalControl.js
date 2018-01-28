import Phaser from 'phaser'
import SignalDial from '../sprites/SignalDial'

export default class extends Phaser.Group {
  constructor({ game }) {
    super(game)

    this.signalDial = new SignalDial({
      game: this.game,
      x: 200,
      y: 130
    })
    this.add(this.signalDial)
    this.signalDial.inputEnabled = true
    this.signalDial.input.useHandCursor = true
    this.signalDial.events.onInputDown.add(this.onSignalDialClick, this)

    this.text = game.add.text(300, 100, '', {
      font: '60px Courier New',
      fill: '#00FFEA',
      smoothed: false
    }, this)
    this.add(this.text)

    this.signalSettings = ["12.3", "45.6", "78.9", "99.8"]
    this.settingIndex = 0

    this.text.text = this.signalSettings[this.settingIndex]
    
    this.onSettingChangeSignal = new Phaser.Signal()
  }

  onSignalDialClick() {
    this.signalDial.rotation = (this.signalDial.rotation + 20) % 360
    
    this.settingIndex = (this.settingIndex + 1) % this.signalSettings.length
    this.text.text = this.signalSettings[this.settingIndex]

    var currentSetting = this.signalSettings[this.currentSetting]
    this.onSettingChangeSignal.dispatch(currentSetting)
  }

  disable() {
    this.signalDial.input.useHandCursor = false
    this.signalDial.inputEnabled = false
  }
}
