
// vm class com.lupicus.vm.config.MyConfig
// could the value of 
// public static Item[] fixedItems be changed 
// [item,amount,pay_item,cost,uses] == [Item, int, Item, int, int]

// let VMInventory = Java.loadClass('com.lupicus.vm.config.MyConfig')
// let VM = Java.loadClass('com.lupicus.vm.block.VendingMachine')
// let VMTE = Java.loadClass('com.lupicus.vm.tileentity.VendingMachineTileEntity')

// BlockEvents.rightClicked('vm:vending_machine', event => {
//     const { item, hand, player, block } = event
//     console.log(VMTE)

// })