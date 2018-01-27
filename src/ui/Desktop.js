import Phaser from 'phaser'
import Terminal from './Terminal'

export default class extends Phaser.Group {
  constructor({ game }) {
    super(game)

    this.terminal = new Terminal({
      game: this.game,
      lineCount: 12,
      lineCharWidth: 50,
    })
    this.add(this.terminal)

    this.terminal.onCloseSignal.add(this.onTerminalClose, this)
  }

  onTerminalClose() {
    this.terminal.visible = false
  }
}
