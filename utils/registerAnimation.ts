import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomWiggle } from "gsap/CustomWiggle";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import "./animationCommonEffect";
import "./animationTextEffect";
import "./animationImageEffect";

gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    EaselPlugin,
    PixiPlugin,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase
);
gsap.registerPlugin(
    DrawSVGPlugin,
    ScrollSmoother,
    GSDevTools,
    InertiaPlugin,
    MorphSVGPlugin,
    MotionPathHelper,
    Physics2DPlugin,
    PhysicsPropsPlugin,
    ScrambleTextPlugin,
    SplitText,
    CustomBounce,
    CustomWiggle
);

export {
    gsap, Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    EaselPlugin,
    PixiPlugin,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase, DrawSVGPlugin,
    ScrollSmoother,
    GSDevTools,
    InertiaPlugin,
    MorphSVGPlugin,
    MotionPathHelper,
    Physics2DPlugin,
    PhysicsPropsPlugin,
    ScrambleTextPlugin,
    SplitText,
    CustomBounce,
    CustomWiggle
};