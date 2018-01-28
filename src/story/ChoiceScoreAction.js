import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.value = data.value
    this.condition = data.condition
  }

  onEnable() {
    super.onEnable()

    if(this.condition == "greater_than_or_equal") {
      if(this.game.PLAYER_SCORE >= this.value) {
        this.onComplete();
      }
    } else if(this.condition == "less_than") {
      if(this.game.PLAYER_SCORE < this.value) {
        this.onComplete();
      }
    }
  }
}
