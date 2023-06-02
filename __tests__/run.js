const { Redstone } = require('../src/Redstone')
const { RedstoneBlock } = require('../src/RedstoneBlock')
const { Repeater } = require('../src/Repeater')

const { run_list, tab_link } = require('../src/utils')

show = (component) => {
    if(component instanceof Redstone) { return 'Redstone : ' + component.intensity }
    if(component instanceof RedstoneBlock) { return 'Redstone Block : ' + component.intensity }
    if(component instanceof Repeater) { return 'Repeater : ' + component.intensity }
}

// List of components

/*let rd = [
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
});*/

// 2D array of components

let tab = [
	[null, null, new Redstone(), null, null],
	[null, new Redstone(), new Redstone(), new Redstone(), null],
	[null, null, new RedstoneBlock(), null, null],
]

tab_link(tab)

tab.forEach(row => {
	row.forEach(element => {
		if(element != null) {
			console.log(show(element))
			console.log(element.links)
		}
	})
})