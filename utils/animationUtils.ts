import { SplitText, gsap } from "./registerAnimation";

export function splitText(target: Element, type: "line" | "word" | 'char') {
    split(target as HTMLElement, type)
    function split(el: HTMLElement, type: "line" | "word" | 'char') {
        const className = `${type}sClass`;
        const typeName = `${type}s`;
        if (!el.querySelector(`.${type}`)) {
            new SplitText(el, {
                type: typeName,
                [className]: type,
            });
        }
    }
}
