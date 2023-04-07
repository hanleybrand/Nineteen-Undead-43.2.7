

ServerEvents.recipes(event => {

    //Hammerstuff copied directly from Seaopolis 2 -- which you should try, it's great!

    function hammerStuff(inBlock, amountOut, outItem) {
        event.custom({ type: "exnihilosequentia:hammer", input: { item: inBlock }, results: [{ chance: 1.0, count: amountOut, item: outItem }] })
    }

    hammerStuff('resourceful_tools:cobblestone_single', 9, 'minecraft:gravel')
    hammerStuff('resourceful_tools:cobblestone_double', 81, 'minecraft:gravel')
    hammerStuff('resourceful_tools:cobblestone_triple', 729, 'minecraft:gravel')

    hammerStuff('resourceful_tools:diorite_single', 9, 'minecraft:gravel')
    hammerStuff('resourceful_tools:diorite_double', 81, 'minecraft:gravel')
    hammerStuff('resourceful_tools:diorite_triple', 729, 'minecraft:gravel')

    hammerStuff('resourceful_tools:granite_single', 9, 'exnihilosequentia:crushed_granite')
    hammerStuff('resourceful_tools:granite_double', 81, 'exnihilosequentia:crushed_granite')
    hammerStuff('resourceful_tools:diorite_triple', 729, 'exnihilosequentia:crushed_granite')

    hammerStuff('resourceful_tools:gravel_single', 9, 'minecraft:sand')
    hammerStuff('resourceful_tools:gravel_double', 81, 'minecraft:sand')
    hammerStuff('resourceful_tools:gravel_triple', 729, 'minecraft:sand')

    hammerStuff('resourceful_tools:sand_single', 9, 'exnihilosequentia:dust')
    hammerStuff('resourceful_tools:sand_double', 81, 'exnihilosequentia:dust')
    hammerStuff('resourceful_tools:sand_triple', 729, 'exnihilosequentia:dust')

})


//     "resourceful_tools:andesite_single",
//  "resourceful_tools:andesite_double",
//     "resourceful_tools:andesite_triple",
//     "resourceful_tools:basalt_double",
//     "resourceful_tools:basalt_single",
//     "resourceful_tools:basalt_triple",
//     "resourceful_tools:cobbled_deepslate_double",
//     "resourceful_tools:cobbled_deepslate_single",
//     "resourceful_tools:cobbled_deepslate_triple",
//     "resourceful_tools:cobblestone_double",
//     "resourceful_tools:cobblestone_single",
//     "resourceful_tools:cobblestone_triple",
//     "resourceful_tools:diorite_double",
//     "resourceful_tools:diorite_single",
//     "resourceful_tools:diorite_triple",
//     "resourceful_tools:dirt_double",
//     "resourceful_tools:dirt_single",
//     "resourceful_tools:dirt_triple",
//     "resourceful_tools:granite_double",
//     "resourceful_tools:granite_single",
//     "resourceful_tools:granite_triple",

//     "resourceful_tools:lavaspring",
//     "resourceful_tools:netherrack_double",
//     "resourceful_tools:netherrack_single",
//     "resourceful_tools:netherrack_triple",

//     "resourceful_tools:stone_double",
//     "resourceful_tools:stone_single",
//     "resourceful_tools:stone_triple",
//     "resourceful_tools:tuff_double",
//     "resourceful_tools:tuff_single",
//     "resourceful_tools:tuff_triple",