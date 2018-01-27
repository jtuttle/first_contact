export default class {
  constructor(data) {
    this.data = data
    this.prereqs = data.prereqs
  }

  onEnable() {
    console.log("enable")
  }

  onComplete() {

  }
}
