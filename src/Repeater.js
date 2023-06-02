const { Component } = require('./Component')
const { is_mutable } = require('./utils')

class Repeater extends Component {
    
    src = null
    dest = null
    is_mutable = true

    constructor() {
        super()
    }

    link = (component) => {
        this.links.push(component)
        component.links.push(this)
        this.src = component
        return true
    }

    spread = (source) => {
        for(let i = 0; i < this.links.length; i++) {
            if(this.links[i][0] != source && this.links[i][0].is_mutable) {
                if(this.intensity != 0 && this.intensity > this.links[i][0].intensity) {
                    this.links[i][0].intensity = this.intensity - 1 > 0 ? this.intensity - 1 : 0
                }
                this.links[i][0].spread(this)
            }
        }
    }

    link = (component) => {
        if(this.links.length === 0) { this.links.push([component, true]) }
        else { this.links.push([component, false]) }
        component.links.push([this, false])
    }
}

module.exports = {
    Repeater,
}