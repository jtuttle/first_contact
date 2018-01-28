import Phaser from 'phaser'

import TerminalIcon from '../sprites/TerminalIcon'
import SignalIcon from '../sprites/SignalIcon'

import Terminal from './Terminal'
import SignalControl from './SignalControl'

export default class extends Phaser.Group {
  constructor({ game }) {
    super(game)

    this.terminalIcon = new TerminalIcon({
      game: game,
      x: 100,
      y: 100
    })
    this.add(this.terminalIcon)
    this.terminalIcon.inputEnabled = true
    this.terminalIcon.events.onInputDown.add(this.onTerminalOpen, this)

    this.signalIcon = new SignalIcon({
      game: game,
      x: 100,
      y: 200
    })
    this.add(this.signalIcon)
    this.signalIcon.inputEnabled = true
    this.signalIcon.events.onInputDown.add(this.onSignalOpen, this)

    this.terminal = new Terminal({
      game: this.game,
      lineCount: 12,
      lineCharWidth: 50,
    })
    this.add(this.terminal)
    this.terminal.onCloseSignal.add(this.onTerminalClose, this)

    this.signalControl = new SignalControl({
      game: this.game,
    })
    this.add(this.signalControl)
    this.signalControl.onCloseSignal.add(this.onSignalClose, this)

    this.hideIcons()
    this.signalControl.visible = false
    this.terminal.visible = true
  }

  hideIcons() {
    this.terminalIcon.visible = false
    this.signalIcon.visible = false
  }

  showIcons() {
    this.terminalIcon.visible = true
    this.signalIcon.visible = true
  }
  
  onTerminalOpen() {
    this.hideIcons()
    this.terminal.visible = true
  }

  onTerminalClose() {
    this.terminal.visible = false
    this.showIcons()
  }

  onSignalOpen() {
    this.hideIcons()
    this.signalControl.visible = true
  }
  
  onSignalClose() {
    this.showIcons()
    this.signalControl.visible = false
  }
}
