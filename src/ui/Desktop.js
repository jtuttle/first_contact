import Phaser from 'phaser'

import Screen from '../sprites/Screen'
import TerminalIcon from '../sprites/TerminalIcon'
import SignalIcon from '../sprites/SignalIcon'

import Terminal from './Terminal'
import SignalControl from './SignalControl'

export default class extends Phaser.Group {
  constructor({ game }) {
    super(game)

    this.screen = new Screen({
      game: game,
      x: 0,
      y: 0
    })
    this.add(this.screen)
    
    this.terminalIcon = new TerminalIcon({
      game: game,
      x: -250,
      y: 100
    })
    this.add(this.terminalIcon)
    this.terminalIcon.inputEnabled = true
    this.terminalIcon.input.useHandCursor = true;
    this.terminalIcon.events.onInputDown.add(this.onTerminalOpen, this)

    this.signalIcon = new SignalIcon({
      game: game,
      x: -150,
      y: 100
    })
    this.add(this.signalIcon)
    this.signalIcon.inputEnabled = true
    this.signalIcon.input.useHandCursor = true;
    this.signalIcon.events.onInputDown.add(this.onSignalOpen, this)

    this.terminal = new Terminal({
      game: this.game,
      lineCount: 10,
      lineCharWidth: 50,
    })
    this.terminal.x = -285
    this.terminal.y = -230
    this.add(this.terminal)

    this.signalControl = new SignalControl({
      game: this.game,
    })
    this.signalControl.x = -285
    this.signalControl.y = -230
    this.add(this.signalControl)

    this.hideIcons()
    this.signalControl.visible = false
    this.terminal.visible = true
  }

  unlock() {
    this.showIcons()
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
    this.signalControl.visible = false
    this.terminal.visible = true
  }

  onSignalOpen() {
    this.terminal.visible = false
    this.signalControl.visible = true
  }
}
