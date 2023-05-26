const { Component } = require('./Component')
const { is_mutable } = require('./utils')

class Redstone extends Component {
    constructor() {
        super()
    }

    spread = (source) => {
        for(let i = 0; i < this.links.length; i++) {
            if(this.links[i] != source && is_mutable(this.links[i])) {
                if(this.intensity != 0 && this.intensity > this.links[i].intensity) {
                    this.links[i].intensity = this.intensity - 1 > 0 ? this.intensity - 1 : 0
                }
                this.links[i].spread(this)
            }
        }
    }
}

module.exports = {
    Redstone,
}