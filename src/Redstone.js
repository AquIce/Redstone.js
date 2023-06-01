const { Component } = require('./Component')

class Redstone extends Component {

    is_mutable = (source) => { return true }

    constructor() {
        super()
    }

    spread = (source) => {
        for(let i = 0; i < this.links.length; i++) {
            if(this.links[i] != source && this.links[i].is_mutable && this.links[i].intensity < this.intensity) {
                this.links[i].intensity = this.intensity - 1 > 0 ? this.intensity - 1 : 0
                this.links[i].spread(this)
            }
        }
    }
}

module.exports = {
    Redstone,
}