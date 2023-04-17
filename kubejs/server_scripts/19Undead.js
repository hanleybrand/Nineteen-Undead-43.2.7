// priority: 0

// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true
// settings.logSkippedRecipes = false
// settings.logErroringRecipes = true

console.info('Server script for Nineteen Undead loading')


ServerEvents.loaded(event => {
    //Server first load warning
    if (!event.server.persistentData.contains('firstload')) {
        event.server.persistentData.putBoolean('firstload', true)
        console.warn('First server load! Lag may be present for a few minutes.')
    }
})

PlayerEvents.loggedIn(event => {
    //Give the player the quest book on first join
    if (!event.player.persistentData.contains('firstjoin')) {
        event.player.persistentData.putBoolean('firstjoin', true)
        event.player.give('ftbquests:book')

    }
    if (!event.player.persistentData.contains('reasearchlevel')) {
        event.player.persistentData.putInt('reasearchlevel', 0)
    }
})

ServerEvents.recipes(event => {
    // Change recipes here
})

// food item with tag "forge:infection_decrease" - reduce the 15 infection level.
// Item with tag "forge:infection_clear"         - cure the player.
// Mobs with tag "forge:undead_mob"              - cause infection on melee attack.
// food with tag "forge:infected_food"           - cause 10 level infection.

ServerEvents.tags('item', event => {
    // infection remediation #forge:infection_decrease tag collection and add foods 
    // event.add('forge:infection_decrease', 'forge:foods/soup')
    event.add('forge:infection_decrease', '#forge:foods/soup')
    // event.add('forge:foods/soup', '#forge:infection_decrease')
    event.add('forge:infection_decrease', 'create:honeyed_apple')
    event.add('forge:infection_decrease', 'hmag:honeyed_apple')
    event.add('forge:infection_decrease', 'hmag:soul_apple')
    event.add('forge:infection_decrease', 'minecraft:golden_apple')
    event.add('forge:infection_decrease', 'minecraft:enchanted_golden_apple')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

// zombies are the mob that mobs, they will only drop bullets and gunpowder -- 
// all crafting progression is via skyblock style mods (ex-nihilo, etc)
// LootJS.modifiers((event) => {
// Loot moved to FxControl config

// right-click document portfolio
BlockEvents.rightClicked('moa_decor_science:portapapeles', event => {
    //
    const { item, hand, player, block } = event
    block.set('minecraft:air')
    player.playSound('minecraft:entity.player.levelup')
    player.tell("You read the yellowing papers on the clipboard, and you begin to understand...")
    if (!player.persistentData.contains('reasearchlevel')) {
        player.persistentData.putInt('reasearchlevel', 1)
    }
    else {
        let rl = player.persistentData.getInt('reasearchlevel') + 1
        player.persistentData.putInt('reasearchlevel', rl)
        player.tell(`Your research level has increased to ${rl}`)
    }

})