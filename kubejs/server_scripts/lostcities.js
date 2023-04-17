
ServerEvents.tags('block', event => {
    // lostcities blocks tags
    //  'lostcities:foliage'
    //  'lostcities:lights'
    //  'lostcities:notbreakable'
    //  'lostcities:rotatable'
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')

    // lights 
    event.get('lostcities:lights').add('horror_elements_mod:flashing_lamp_1')
    event.get('lostcities:lights').add('horror_elements_mod:flashing_lamp_on')
    event.get('lostcities:lights').add('vm:vending_machine')

    // rotatable

    event.get('lostcities:rotatable').add('cgm:workbench')
    event.get('lostcities:rotatable').add('vm:vending_machine')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})