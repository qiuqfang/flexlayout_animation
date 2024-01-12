import { gsap } from "./registerAnimation";


export const registerAnimationEffect = (name: string, effect: (targets: gsap.TweenTarget, config: gsap.TweenVars) => gsap.core.Tween) => {
    gsap.registerEffect({ name, effect, default: {}, extendTimeline: true })
}