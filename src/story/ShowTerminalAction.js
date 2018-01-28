import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

    this.gameState = this.game.state.states[this.game.state.current]
  }

  onEnable() {
    super.onEnable()

    this.gameState.modal.visible = false
    this.gameState.background.visible = false
    this.gameState.soylent.visible = false
    this.gameState.fishBowl.visible = false
    this.gameState.fish.visible = false
    this.gameState.telephone.visible = false
    this.gameState.redButton.visible = false
    
    this.gameState.desktop.visible = true
    this.gameState.desktop.screen.visible = false

    this.onComplete()
  }
}
