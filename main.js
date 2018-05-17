let homeScene = new Phaser.Scene('Home');


homeScene.preload = function() {
	this.load.image('apple');
};

homeScene.create = function() {
	let apple = this.add.sprite(100, 100, 'apple');
	
	apple.setInteractive();

	this.input.setDraggable(apple);

	this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
		gameObject.x = dragX;
		gameObject.y = dragY;
	});
};

let config = {
  type: Phaser.AUTO,
  width: 360,
  height: 640,
  scene: homeScene,
  title: 'Virtual Pet',
  pixelArt: false,
  backgroundColor: 'ffffff'
};

let game = new Phaser.Game(config);
