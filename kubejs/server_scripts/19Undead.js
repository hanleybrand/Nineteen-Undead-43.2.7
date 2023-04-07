// priority: 0

// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true
// settings.logSkippedRecipes = false
// settings.logErroringRecipes = true

console.info('Server script for Nineteen Undead loading')

ServerEvents.recipes(event => {
    // Change recipes here
})

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

// zomibes will be more plentiful, but they replace creepers, spiders and skeletons
// so their loot ables need to encompass
LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/.*zombie.*/)
        .addWeightedLoot([2, 5], [
            Item.of("minecraft:gunpowder").withChance(20),
            Item.of("minecraft:string").withChance(15),
            Item.of("minecraft:bone").withChance(15),
            Item.of("cgm:basic_bullet").withChance(60),
            Item.of("cgm:advanced_bullet").withChance(10),
            Item.of("cgm:shell").withChance(01),
        ]);

});