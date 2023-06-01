const { Redstone } = require('../src/Redstone')
const { RedstoneBlock } = require('../src/RedstoneBlock')

const { list_link } = require('../src/utils')

show = (component) => {
    if(component instanceof Redstone) { return 'Redstone : ' + component.intensity }
    if(component instanceof RedstoneBlock) { return 'Redstone Block : ' + component.intensity }
}

let rd = [
    new RedstoneBlock(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new RedstoneBlock()
]

list_link(rd)

rd.forEach(element => {
    console.log(show(element))
});