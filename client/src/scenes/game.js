export default class Game extends Phaser.Scene {
	constructor() {
		super({
			key: 'Game'
		});
	}

	preload() {
		this.load.image('CyanCardFront', '../assets/CyanCardFront.png');
		this.load.image('CyanCardBack', '../assets/CyanCardBack.png');
		this.load.image('MagentaCardFront', '../assets/MagentaCardFront.png');
		this.load.image('MagentaCardBack', '../assets/MagentaCardBack.png');
	}

	create() {
		let self = this;

		this.card = this.add
			.image(300, 300, 'CyanCardFront')
			.setScale(0.3, 0.3)
			.setInteractive();

    this.input.setDraggable(this.card);
    
    this.dealCards = () => {
      
    }

		this.dealText = this.add
			.text(75, 350, ['DEAL CARDS'])
			.setFontSize(18)
			.setFontFamily('Trebuchet MS')
			.setColor('#00ffff')
			.setInteractive();

		this.dealText.on('pointerdown', function() {
			self.dealCards();
		});
	}
}
