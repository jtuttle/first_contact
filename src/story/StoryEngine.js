import ChoiceAction from './ChoiceAction'
import ChoiceBranchPrintAction from './ChoiceBranchPrintAction'
import ChoiceScoreAction from './ChoiceScoreAction'
import ClickAction from './ClickAction'
import CorruptedStreamAction from './CorruptedStreamAction'
import DialogueAction from './DialogueAction'
import FadeAction from './FadeAction'
import GoodEndingAction from './GoodEndingAction'
import PasswordPromptAction from './PasswordPromptAction'
import PrintAction from './PrintAction'
import SetVisibilityAction from './SetVisibilityAction'
import ShowTerminalAction from './ShowTerminalAction'
import ZoomAction from './ZoomAction'

export default class {
  constructor({ game, storyJson }) {
    this.game = game
    this.storyJson = storyJson

    this.nodes = []
    this.completed = {} // for fast lookup when checking prereqs
  }

  loadStory() {
    this.storyJson.forEach(function(nodeData) {
      var klass = this.getClass(nodeData.type)
      var node = new klass({ game: this.game, data: nodeData })
      this.nodes.push(node)
    }, this)
  }

  enableNodes() {
    this.getNewEnabled().forEach(function(node) {
      node.onCompleteSignal.addOnce(this.onNodeComplete, this)
      node.onEnable()
    }, this)
  }

  onNodeComplete(node) {
    this.completed[node.id] = true

    console.log("enabling nodes")
    
    this.enableNodes()
  }

  getNewEnabled() {
    var newEnabled = []

    this.nodes.forEach(function(node) {
      if(!(node.id in this.completed) && !node.enabled && this.nodeCanEnable(node)) {
        newEnabled.push(node)
      }
    }, this)

    return newEnabled
  }

  nodeCanEnable(node) {
    var canEnable = true
    
    node.prereqs.forEach(function(prereq) {
      if(!(prereq in this.completed)) {
        canEnable = false
      }
    }, this)
    
    return canEnable
  }

  getNode(nodeId) {
    var matchNode = undefined

    this.nodes.forEach(function(node) {
      if(node.id == nodeId)
        matchNode = node
    })
    
    return matchNode
  }

  getClass(nodeType) {
    switch(nodeType) {
    case "choice":
      return ChoiceAction
      break;
    case "choice_branch_print":
      return ChoiceBranchPrintAction
      break;
    case "choice_score":
      return ChoiceScoreAction
      break;
    case "click":
      return ClickAction
      break;
    case "corrupted_stream":
      return CorruptedStreamAction
      break;
    case "dialogue":
      return DialogueAction
      break;
    case "fade":
      return FadeAction
      break;
    case "good_ending":
      return GoodEndingAction
      break;
    case "password_prompt":
      return PasswordPromptAction
      break;
    case "print":
      return PrintAction
      break;
    case "set_visibility":
      return SetVisibilityAction
      break;
    case "show_terminal":
      return ShowTerminalAction
      break;
    case "zoom":
      return ZoomAction
      break;
    }
  }
}
