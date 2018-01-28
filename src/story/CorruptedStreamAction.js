import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.phrase = data.phrase
    
    var gameState = this.game.state.states[this.game.state.current]
    this.terminal = gameState.desktop.terminal
    this.signalControl = gameState.desktop.signalControl
  }

  onEnable() {
    super.onEnable()

    this.streamSfx = this.game.sound.play('corrupted_stream');

    this.terminal.onBufferEmptySignal.add(this.onBufferEmpty, this)
    
    this.terminal.addText(this.corruptPhrase() + "\n")

    this.signalControl.onSettingChangeSignal.add(this.onSignalChange, this)
  }

  onComplete() {
    this.streamSfx.stop()
    
    this.game.sound.play('signal_fixed');
    
    this.signalControl.disable()
    
    this.terminal.onBufferEmptySignal.remove(this.onBufferEmpty, this)
    this.signalControl.onSettingChangeSignal.remove(this.onSignalChange, this)

    this.terminal.clearText()
    
    super.onComplete()
  }

  corruptPhrase() {
    var phrase = this.phrase

    for(var i = 0; i < 20; i++) {
      var pos = Math.floor(Math.random() * phrase.length);
      phrase = phrase.substring(0, pos) + ' ' + phrase.substring(pos+1);
    }

    return phrase
  }

  onBufferEmpty() {
    this.terminal.addText(this.corruptPhrase() + "\n")
  }

  onSignalChange(frequency) {
    if(frequency == "99.8") {
      this.onComplete()
    }
  }
}
