import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ data }) {
    super(data)

    this.lines = data.lines
  }

  onEnable() {
    super.onEnable()
  }

  onComplete() {

  }
}
