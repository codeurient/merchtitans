import {computed, ComputedRef} from "vue";

export const addClassToTitle = (title: string, classes: string = "color-text"): ComputedRef<string> => {
    return computed(() => title.replace(new RegExp("'(.*?)'", "gi"), (_, match) =>
        `<span class="${classes}">${match}</span>`
    ))
}
