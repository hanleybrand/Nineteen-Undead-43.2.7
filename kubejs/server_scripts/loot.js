console.info('server_scripts: loot.js loading')

LootJS.modifiers((event) => {
    event
        .addLootTableModifier(/.*zombie.*/)
        .addWeightedLoot([1, 3], [
            Item.of("cgm:basic_bullet").withChance(100),
        ])
        .addWeightedLoot([1, 4], [
            Item.of("minecraft:gunpowder").withChance(10),
            Item.of("minecraft:string").withChance(05),
            Item.of("minecraft:bone").withChance(05),
            Item.of("cgm:advanced_bullet").withChance(01),
            Item.of("cgm:shell").withChance(01),
        ]);
    event
        .addLootTableModifier(/.*husk.*/)
        .addWeightedLoot([1, 3], [
            Item.of("cgm:basic_bullet").withChance(100),
        ])
        .addWeightedLoot([1, 4], [
            Item.of("minecraft:gunpowder").withChance(10),
            Item.of("minecraft:string").withChance(05),
            Item.of("minecraft:bone").withChance(05),
            Item.of("cgm:advanced_bullet").withChance(01),
            Item.of("cgm:shell").withChance(01),
        ]);


}); 