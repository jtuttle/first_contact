import StoryAction from './StoryAction'

export default class extends StoryAction {
  constructor({ game, data }) {
    super(game, data)

  }

  onEnable() {
    super.onEnable()

    this.game.camera.fade('#FFFFFF')


  }

  onFadeComplete() {

  }
/*
  tweenTint(obj, startColor, endColor, time) {
    var colorBlend = {step: 0}; 
    var colorTween = game.add.tween(colorBlend).to({step: 100}, time);

    colorTween.onUpdateCallback(function() {
      obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
    })

    obj.tint = startColor;
    
    colorTween.start();
  }
*/
}
