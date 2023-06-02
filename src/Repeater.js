const { Component } = require('./Component')

class Repeater extends Component {
    
    src = null
    dest = null

    is_mutable = (source) => { return source === this.src }

    constructor() {
        super()
    }

    link = (component) => {
        if(this.links.length === 1) {
            this.links.push(component)
            this.dest = component
        }
        else { this.links.push(component) }
        component.links.push(this)
        return true
    }

    spread = (source) => {
        if(source == this.src) {
            this.intensity = 15
            if(this.links[i].is_mutable(this))
            this.dest.intensity = 15
            this.dest.spread(this)
        }
    }
}

module.exports = {
    Repeater,
}