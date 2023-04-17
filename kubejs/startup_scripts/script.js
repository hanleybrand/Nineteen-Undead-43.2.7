// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

Platform.mods.kubejs.name = 'NineteenUndeadJS'

// fix localization error for zombiekit
Platform.mods.zombiekit.name = 'Zombie Survival Kit'

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

StartupEvents.registry("sound_event", event => {
	event.create('minecraft:entity.player.levelup')
})