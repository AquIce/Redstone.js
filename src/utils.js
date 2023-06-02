list_link = (list) => {
    for(let i = 0; i < list.length - 1; i++) {
        if(list[i].link(list[i + 1])) {
            console.log(list[i])
            list[i].src = list[i - 1]
        }
    }
    list[0].spread(null)
}


first_non_null_element = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] != null) { return [i, j] }
        }
    }
}

adjacent_cells = (arr, x, y) => {
    let adjacents = []
    for(const co of [[x + 1, y],[x - 1, y],[x, y + 1],[x, y - 1]]) {
        if(co[0] <= arr.length - 1 && co[1] <= arr.length - 1 && co[0] >= 0 && co[1] >= 0) { adjacents.push([co[0], co[1]])}
    }
	return adjacents
}

tab_link = (tab, start_index=[]) => {
	done = []
    start_index = start_index.length == 0 ? first_non_null_element(tab) : start_index
	for(const co of adjacent_cells(tab, start_index[0], start_index[1])) {
		console.log('[tab_link-st] :', tab[start_index[0]][start_index[1]])
		console.log('[tab_link-co] :', tab[co[0]][co[1]])
		if(tab[co[0]][co[1]] != null) { tab[start_index[0]][start_index[1]].link(tab[co[0]][co[1]]) }
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