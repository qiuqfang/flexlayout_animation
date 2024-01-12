import { registerAnimationEffect } from "./animationEffect";
import { gsap } from "./registerAnimation";


const imageAnimations: Record<string, (targets: gsap.TweenTarget, config: gsap.TweenVars) => gsap.core.Tween> = {
    imageMark: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.from(targets, {
            r: 0,
            duration: config.duration ?? 2,
            ease: config.ease ?? "power1.out",
            stagger: config.stagger ?? 0.1,
            extendTimeline: true,
        });
    },

}

Object.entries(imageAnimations).forEach(([key, value]) => {
    registerAnimationEffect(key, value)
})