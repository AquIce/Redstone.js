const { Component } = require('./Component')

class RedstoneBlock extends Component {
    constructor() {
        super()
        this.intensity = 15
    }

    spread = (source) => {
        for(let i = 0; i < this.links.length; i++) {
            this.links[i].intensity = 15
            this.links[i].spread(this)
        }
    }
}

module.exports = {
    RedstoneBlock,
}