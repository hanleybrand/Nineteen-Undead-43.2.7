// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

ItemEvents.tooltip(tooltip => {
	tooltip.add(['zombiekit:serum_needle_tubing'], 'Cures infection and fixes you up!')

	// infection reducing foods
	//tooltip.add(['#forge:foods/soup'], 'Reduces infection level')
	tooltip.add(['minecraft:golden_apple', 'create:honeyed_apple', 'hmag:soul_apple',
		'minecraft:enchanted_golden_apple', 'hmag:honeyed_apple'], 'Reduces infection level')
})
