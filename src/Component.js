class Component {
    intensity = 0
    texture = ' '
    links = []

    constructor() {}

    spread = (source) => {}

    set_instensity = (val) => {
        this.intensity = val
        this.spread(this)
    }

    link = (component) => {
        this.links.push(component)
        component.links.push(this)
    }
}

module.exports = {
    Component,
}