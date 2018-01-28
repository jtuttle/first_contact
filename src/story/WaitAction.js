import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.duration = data.duration
  }

  onEnable() {
    super.onEnable()

    this.timer = this.game.time.create();
    this.timer.add(Phaser.Timer.SECOND * 3, this.onTimerComplete, this);
    this.timer.start()
  }

  onTimerComplete() {
    this.onComplete()
  }
}
