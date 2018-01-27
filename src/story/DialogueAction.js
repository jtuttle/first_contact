import StoryAction from './StoryAction'
import Dialogue from '../ui/Dialogue'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.lines = data.lines
    this.lineIndex = 0
  }

  onEnable() {
    super.onEnable()

    this.dialogue = new Dialogue({
      game: this.game,
      onClick: this.onDialogueClick,
      onClickContext: this
    })
    this.game.add.existing(this.dialogue)
    this.dialogue.setText(this.lines[this.lineIndex])
  }

  onComplete() {
    this.dialogue.destroy()

    super.onComplete()
  }

  onDialogueClick() {
    if(!this.dialogue.text.done()) { return }
    
    if(this.lineIndex >= this.lines.length - 1) {
      this.onComplete()
    } else {
      this.lineIndex++
      this.dialogue.setText(this.lines[this.lineIndex])
    }
  }
}
