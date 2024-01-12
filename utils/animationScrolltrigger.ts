import { ScrollTrigger } from "gsap/ScrollTrigger";


export const animationScrollTriggerDefault = (targets: Element, invokeEffect?: (el: Element, progress: number, direction?: 1 | -1) => void, config: ScrollTrigger.StaticVars = { scrub: true }) => {
    const onUpdate = config?.onUpdate ?? ((self) => {
        const el = self.trigger!;
        const progress = self.progress;
        const direction = self.direction as 1 | -1; // 方向 1 下 -1 上
        invokeEffect && invokeEffect(el, progress, direction)
    })
    ScrollTrigger.create({
        ...config,
        trigger: targets,
        onUpdate,
    });
}
export const animationScrollTriggerEnd = (targets: Element, invokeEffect?: (el: Element, progress: number, direction?: 1 | -1) => void, config: ScrollTrigger.StaticVars = { scrub: true }) => {
    const onUpdate = config?.onUpdate ?? ((self) => {
        const el = self.trigger!;
        const progress = self.progress;
        const direction = self.direction as 1 | -1; // 方向 1 下 -1 上
        invokeEffect && invokeEffect(el, progress, direction)
    })
    ScrollTrigger.create({
        ...config,
        trigger: targets,
        start: "top bottom",
        end: "bottom+=50 bottom",
        onUpdate,
    });
}
export const animationScrollTriggerCenter = (targets: Element, invokeEffect?: (el: Element, progress: number, direction?: 1 | -1) => void, config: ScrollTrigger.StaticVars = { scrub: true }) => {
    const onUpdate = config?.onUpdate ?? ((self) => {
        const el = self.trigger!;
        const progress = self.progress;
        const direction = self.direction as 1 | -1; // 方向 1 下 -1 上
        invokeEffect && invokeEffect(el, progress, direction)
    })
    ScrollTrigger.create({
        ...config,
        trigger: targets,
        start: "top center",
        end: "center center",
        onUpdate,
    });
}