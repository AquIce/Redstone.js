list_link = (list) => {
    for(let i = 0; i < list.length - 1; i++) {
        if(list[i].link(list[i + 1])) {
            console.log(list[i])
            list[i].src = list[i - 1]
        }
    }
    list[0].spread(null)
}

tab_link = (tab, start_index=[]) => {
    if(start_index === []) {
        tab.find(row => ![null,undefined].includes(row[0]))
    }
}

find_update_needed_component = (first_component, before=null) => {
    if(first_component.links.length > 0) {
        first_component.links.forEach(link => {
            if(link != before) {
                if(link.intensity - first_component.intensity > 1) {
                    console.log(first_component)
                    link.spread(null)
                } find_update_needed_component(link, first_component)
            }
        })
    }
}

run_list = (list) => {
    list_link(list)
    find_update_needed_component(list[0])
}

module.exports = {
    run_list,
    tab_link,
}