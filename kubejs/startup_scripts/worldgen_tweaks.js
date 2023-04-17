// disable structure gen from the horror mods


WorldgenEvents.remove(event => {
    console.log('printing possible plains features ========')
    event.printFeatures('', 'minecraft:plains')
})

// ServerEvents.tags('worldgen/biome', event => {
//     event.removeAll('horror_elements_mod:horrorforest')
// })

// to generate the list of features to cancel, save time by using a shell in
// mod_name/data/forge/biome_modifier and use jq: 
//      cat * | jq - s  '.[] | {step, features}'

WorldgenEvents.remove(event => {

    event.removeFeatureById('underground_structures',
        [
            'horror_elements_mod:horrificsewers'
        ])

    // leave in the blood for now as it probably just adds ambiance
    //also the "get out sign"
    // 'horror_elements_mod:blood_1',
    // 'horror_elements_mod:blood_2',
    // 'horror_elements_mod:blood_3',
    // 'horror_elements_mod:blood_4',
    // 'horror_elements_mod:blood_5',
    // 'horror_elements_mod:blood_6',
    // 'horror_elements_mod:blood_7',
    // 'horror_elements_mod:blood_8',
    // 'horror_elements_mod:blood_9',
    // 'horror_elements_mod:blood_10',
    // 'horror_elements_mod:getoutsign',
    event.removeFeatureById('underground_ores',
        [
            'horror_elements_mod:bodyinabag',
            'horror_elements_mod:crucified_body',
            'horror_elements_mod:headonstick',
            'horror_elements_mod:impaled_body',
            'horror_elements_mod:scarified_pig',
            'horror_elements_mod:slicedbody'
        ])

    event.removeFeatureById('surface_structures',
        [
            'horror_elements_mod:hauntedchurch',
            'horror_elements_mod:predatortree',
            'horror_elements_mod:predatortrophyroom',
            'horror_elements_mod:psychopathhouse',
            'horror_elements_mod:pyramidofthedeath',
            'horror_elements_mod:sacrificialplatform_2',
            'horror_elements_mod:sacrificialplatform',
            'horror_elements_mod:spaceshipcrashsite',
            'horror_elements_mod:stargazer_laboratory'
        ])

});

