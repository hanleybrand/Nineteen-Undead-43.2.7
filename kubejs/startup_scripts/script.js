// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	// event.create('test_item')
	
	// // You can chain builder methods as much as you like
	// event.create('test_item_2').maxStackSize(16).glow(true)
	
	// // You can specify item type as 2nd argument in create(), some types have different available methods
	// event.create('custom_sword', 'sword').tier('diamond').attackDamageBaseline(10.0)

})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

// onEvent('item.registry', event => {
  
// 	// The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
// 	// If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json

//   })