import DialogueAction from './DialogueAction'
import ChoiceAction from './ChoiceAction'

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
    this.getEnabled().forEach(function(node) {
      this.enabled.push(node)
      node.onEnable()
      node.onCompleteSignal.add(this.onNodeComplete, this)
    }, this)
  }

  onNodeComplete(node) {
    console.log("COMPLETE!")
  }

  getEnabled() {
    var enabled = []
    
    this.nodes.forEach(function(node) {
      if(!(node.id in this.completed) && this.nodeCanEnable(node)) {
        enabled.push(node)
      }
    }, this)

    return enabled
  }

  nodeCanEnable(node) {
    node.prereqs.forEach(function(prereq) {
      if(prereq in this.completed) {
        return false
      }
    })
    return true
  }

  getClass(nodeType) {
    switch(nodeType) {
    case "dialogue":
      return DialogueAction
      break;
    case "choice":
      return ChoiceAction
      break;
    }
  }
}
