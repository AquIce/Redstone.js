const { RedstoneBlock } = require('../src/RedstoneBlock')

const IMMUTABLE_COMPONENTS = [
    RedstoneBlock,
]

list_link = (list) => {
    for(let i = 0; i < list.length - 1; i++) {
        list[i].link(list[i + 1])
    }
    list[0].spread(null)
}

is_mutable = (component) => {
    IMMUTABLE_COMPONENTS.forEach(im => {
        if(component instanceof im) { return false; }
    });
    return true;
}

module.exports = {
    list_link,
    is_mutable,
}