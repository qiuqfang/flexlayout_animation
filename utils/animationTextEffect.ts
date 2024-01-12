import { registerAnimationEffect } from "./animationEffect";
import { animationScrollTriggerCenter, animationScrollTriggerDefault, animationScrollTriggerEnd } from "./animationScrolltrigger";
import { splitText } from "./animationUtils";
import { gsap } from "./registerAnimation";

const textAnimations: Record<string, (targets: gsap.TweenTarget, config: gsap.TweenVars) => gsap.core.Tween> = {
    typewriter: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.from(targets, {
            autoAlpha: config.autoAlpha ?? 0.2,
            duration: config.duration ?? 2,
            ease: config.ease ?? "power1.out",
            stagger: config.stagger ?? 0.1,
            extendTimeline: true,
        });
    },
    scale: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.from(targets, {
            scale: config.scale ?? 0,
            duration: config.duration ?? 2,
            ease: config.ease ?? "power1.out",
            stagger: config.stagger ?? 0.1,
        });
    },
}

Object.entries(textAnimations).forEach(([key, value]) => {
    registerAnimationEffect(key, value)
})


export const scrollBlockAnimationCenter = (ele: HTMLElement, invokeEffect?: (el: Element, progress: number, direction?: 1 | -1) => void, config?: ScrollTrigger.StaticVars) => {
    animationScrollTriggerCenter(ele, invokeEffect, {
        ...config,
        markers: true,
    });
}

export const scrollSlideAnimationDefault = (ele: HTMLElement, config?: any) => {
    animationScrollTriggerDefault(ele, (el, progress) => { }, {
        ...config,
    });

}