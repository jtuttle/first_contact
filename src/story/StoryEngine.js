import ChoiceAction from './ChoiceAction'
import ClickAction from './ClickAction'
import DialogueAction from './DialogueAction'
import ZoomAction from './ZoomAction'

export default class {
  constructor({ game, storyJson }) {
    this.game = game
    this.storyJson = storyJson

    this.nodes = []
    this.completed = {}
    this.enabled = []
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
      this.enabled.push(node)
      node.onEnable()
      node.onCompleteSignal.add(this.onNodeComplete, this)
    }, this)
  }

  onNodeComplete(node) {
    this.enabled.splice(this.enabled.indexOf(node), 1)
    this.completed[node.id] = true

    this.enableNodes()
    
    /*
    console.log("enabled")
    console.log(this.enabled)
    console.log("completed")
    console.log(this.completed)
    */
  }

  getNewEnabled() {
    var enabled = []
    
    this.nodes.forEach(function(node) {
      if(!(node.id in this.completed) && !(node in this.enabled) && this.nodeCanEnable(node)) {
        enabled.push(node)
      }
    }, this)

    return enabled
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
    case "dialogue":
      return DialogueAction
      break;
    case "zoom":
      return ZoomAction
      break;
    }
  }
}
