import ChoiceAction from './ChoiceAction'
import ClickAction from './ClickAction'
import CorruptedStreamAction from './CorruptedStreamAction'
import DialogueAction from './DialogueAction'
import PrintAction from './PrintAction'
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
      node.onEnable()
      node.onCompleteSignal.addOnce(this.onNodeComplete, this)
    }, this)
  }

  onNodeComplete(node) {
    this.completed[node.id] = true

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

  getClass(nodeType) {
    switch(nodeType) {
    case "choice":
      return ChoiceAction
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
    case "print":
      return PrintAction
      break;
    case "zoom":
      return ZoomAction
      break;
    }
  }
}
