const { Component } = require('./Component')

class Redstone extends Component {

    is_mutable = (source) => { return true }

    constructor() {
        super()
    }

    spread = (source) => {
        for(let i = 0; i < this.links.length; i++) {
            if(this.links[i][0] != source && this.links[i][0].is_mutable && this.links[i][0].intensity < this.intensity) {
                this.links[i][0].intensity = this.intensity - 1 > 0 ? this.intensity - 1 : 0
                this.links[i][0].spread(this)
            }
        }
    }
}

module.exports = {
    Redstone,
}