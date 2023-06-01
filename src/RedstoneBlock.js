const { Component } = require('./Component')

class RedstoneBlock extends Component {

    is_mutable = false
    is_spread = false

    constructor() {
        super()
        this.intensity = 15
    }

    spread = (source) => {
        for(let i = 0; i < this.links.length; i++) {
            this.links[i][0].intensity = 15
            this.links[i][0].spread(this)
        }
    }
}

module.exports = {
    RedstoneBlock,
}