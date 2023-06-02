const { Component } = require('./Component')

class RedstoneBlock extends Component {

    is_mutable = (source) => { return false }

    constructor() {
        super()
        this.intensity = 15
    }

    spread = (source) => {
        for(let i = 0; i < this.links.length; i++) {
            if(this.links[i].is_mutable(this)) {
                this.links[i].intensity = 15
                this.links[i].spread(this)
            }
        }
    }
}

module.exports = {
    RedstoneBlock,
}