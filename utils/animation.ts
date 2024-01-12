import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

export const blocksEnterAnimation = (el: Element) => {
    const blockEls = el?.querySelectorAll(
        ".slide .flexlayout__tab"
    ) as unknown as HTMLElement[];
    gsap.set(blockEls, {
        willChange: "opacity",
        // opacity: 0,
        // y: "100%",
    });
}
export const blocksUpdateAnimation = (el: Element, progre: number) => {
    const blockEls = el.querySelectorAll(
        ".slide .flexlayout__tab"
    ) as unknown as HTMLElement[];
    gsap.set(blockEls, {
        // opacity: 1 * progress,
        // y: `${100 - 100 * progress}%`,
    });
}
export const imgEnterAnimation = (el: Element) => {
    const imgEls = el!.querySelectorAll(
        ".ele-image"
    ) as unknown as HTMLElement[];
    gsap.from(imgEls, {
        willChange: "transform",
        duration: 4, scale: 1.5, ease: "elastic.out(1, 0.3)"
    });
}
export const imgUpdateAnimation = (el: Element, progress: number) => {
    const imgEls = el!.querySelectorAll(
        ".ele-image"
    ) as unknown as HTMLElement[];
    gsap.set(imgEls, {
        willChange: "transform",
        scale: 0.5 + 0.5 * progress,
    });
}
export const textEnterAnimation = (el: Element) => {
    const pEls = el!.querySelectorAll(
        ".ele-paragraph .paragraph-content"
    ) as unknown as HTMLElement[];
    console.log(pEls, "textEnterAnimation");
    gsap.from(pEls, {
        y: 500,
        ease: "power1.out",
        duration: 2,
    });
    for (const pEl of pEls) {
        if (!pEl.querySelector(".word")) {
            new SplitText(pEl, {
                type: "lines,words,chars",
                linesClass: "line",
                wordsClass: "word",
                charsClass: "char",
            });
        }
        const elements = pEl.querySelectorAll(".word");

        gsap.from(elements, {
            autoAlpha: 0,
            ease: "power1.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: pEl,
            }
        });
    }
}
export const textUpdateAnimation = (el: Element, progress: number) => {
    const pEls = el!.querySelectorAll(
        ".ele-paragraph .paragraph-content"
    ) as unknown as HTMLElement[];
    console.log(pEls, "textEnterAnimation");

    for (const pEl of pEls) {
        if (!pEl.querySelector(".word")) {
            new SplitText(pEl, {
                type: "lines,words,chars",
                linesClass: "line",
                wordsClass: "word",
                charsClass: "char",
            });
        }
        const elements = pEl.querySelectorAll(".word");

        elements.forEach((element) => {
            gsap.set(element, {
                // opacity: 1 * progress,
                // rotationY: `${200 - 200 * progress}`,
                // x: `${5000 - 5000 * progress}`,
                scale: 1 * progress,
                stagger: 0.1,
            });
        });
    }
}
