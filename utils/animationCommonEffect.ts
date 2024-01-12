import { registerAnimationEffect } from "./animationEffect";
import { gsap } from "./registerAnimation";

const commonAnimations: Record<string, (targets: gsap.TweenTarget, config: gsap.TweenVars) => gsap.core.Tween> = {
    slide: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.from(targets, {
            opacity: config.opacity ?? 0,
            rotationZ: config.rotationZ ?? "10",
            duration: config.duration ?? 0.5,
            ease: config.ease ?? "power1.out",
            stagger: config.stagger ?? 0.1,
        });
    },
    move: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.from(targets, { x: config.x ?? -100, duration: config.duration ?? 1, ease: config.ease ?? "power1.inOut" });
    },
    fade: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.from(targets, { opacity: config.opacity ?? 0, duration: config.duration ?? 2, ease: config.ease ?? "power1.inOut" });
    },
    popup: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.from(targets, { duration: config.duration ?? 2, scale: config.scale ?? 2, ease: config.ease ?? "elastic.out(1, 0.3)" });
    },
    floatIn: (targets: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.from(targets, {
            duration: config.duration ?? 2,
            opacity: config.opacity ?? 0, // 渐显效果
            scale: config.scale ?? 0, // 放大至原始大小
            ease: config.ease ?? "power2.out",
        });
    },
    InterPageMove: (target: gsap.TweenTarget, config: gsap.TweenVars) => {
        return gsap.set(target, {
            autoAlpha: 1 - config.progress, // 透明度
            scale: 1 - config.progress, // 缩放
            left: 100 * config.progress + "%", // 平移
            borderRadius: config.progress * 100, // 原件
        });
    }
}

Object.entries(commonAnimations).forEach(([key, value]) => {
    registerAnimationEffect(key, value);
})