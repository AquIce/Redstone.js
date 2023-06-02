const { Redstone } = require('../src/Redstone')
const { RedstoneBlock } = require('../src/RedstoneBlock')
const { Repeater } = require('../src/Repeater')

const { run_list } = require('../src/utils')

show = (component) => {
    if(component instanceof Redstone) { return 'Redstone : ' + component.intensity }
    if(component instanceof RedstoneBlock) { return 'Redstone Block : ' + component.intensity }
    if(component instanceof Repeater) { return 'Repeater : ' + component.intensity }
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
    new Repeater(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new Redstone(),
    new RedstoneBlock(),
]

run_list(rd)

rd.forEach(element => {
    console.log(show(element))
});