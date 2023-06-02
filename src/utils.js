const { RedstoneBlock } = require('../src/RedstoneBlock')

const IMMUTABLE_COMPONENTS = [
    RedstoneBlock,
]

list_link = (list) => {
    for(let i = 0; i < list.length - 1; i++) {
        if(list[i].link(list[i + 1])) {
            list[i].dest = list[i + 1]
        }
    }
    list[0].spread(null)
}

is_mutable = (component) => {
    IMMUTABLE_COMPONENTS.forEach(im => {
        if(component instanceof im) { return false; }
    });
    return true;
}

find_update_needed_component = (first_component, before=null) => {
    if(first_component.links.length > 0) {
        first_component.links.forEach(link => {
            if(link[0] != before) {
                if(link[0].intensity - first_component.intensity > 1) {
                    console.log(first_component)
                    link[0].spread(null)
                } find_update_needed_component(link[0], first_component)
            }
        })
    }
}

run_list = (list) => {
    list_link(list)
    find_update_needed_component(list[0])
}

module.exports = {
    is_mutable,
    run_list,
}