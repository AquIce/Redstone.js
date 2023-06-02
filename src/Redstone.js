const { Component } = require('./Component')

class Redstone extends Component {

    is_mutable = (source) => { return true }

    constructor() {
        super()
    }

    spread = (source) => {
        if(this.intensity > 0) {
            for(let i = 0; i < this.links.length; i++) {
                if(this.links[i] != source && this.links[i].is_mutable(this) && this.links[i].intensity < this.intensity) {
                    this.links[i].intensity = this.intensity - 1
                    this.links[i].spread(this)
                }
            }
        }
    }
}

module.exports = {
    Redstone,
}