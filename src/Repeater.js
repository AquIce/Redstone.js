const { Component } = require('./Component')
const { is_mutable } = require('./utils')

class Repeater extends Component {
    
    src = null
    is_mutable = true

    constructor() {
        super()
    }

    link = (component) => {
        this.links.push(component)
        component.links.push(this)
        this.src = component
    }

    spread = (source) => {
        for(let i = 0; i < this.links.length; i++) {
            if(this.links[i] != source && this.links[i].is_mutable) {
                if(this.intensity != 0 && this.intensity > this.links[i].intensity) {
                    this.links[i].intensity = this.intensity - 1 > 0 ? this.intensity - 1 : 0
                }
                this.links[i].spread(this)
            }
        }
    }
}

module.exports = {
    Repeater,
}