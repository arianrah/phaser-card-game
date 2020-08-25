export default class Game extends Phaser.Scene {
	constructor() {
		super({
			key: 'Game'
		})
	}

	preload() {
		this.load.image('CyanCardFront', '../assets/CyanCardFront.png')
		this.load.image('CyanCardBack', '../assets/CyanCardBack.png')
		this.load.image('MagentaCardFront', '../assets/MagentaCardFront.png')
		this.load.image('MagentaCardBack', '../assets/MagentaCardBack.png')
	}

	create() {}
}
