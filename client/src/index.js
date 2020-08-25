import Phaser from 'phaser'
import logoImg from './assets/logo.png'
import game from './scenes/game'

const config = {
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: 1280,
	height: 720,
	scene: [game]
}

const game = new Phaser.Game(config)
