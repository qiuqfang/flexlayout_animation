"use client";

import { IJsonModel, Layout, Model } from "@qiuqfang/flexlayout-react";
import { v4 as uuidv4 } from "uuid";
import "@qiuqfang/flexlayout-react/style/light.css";
import "./index.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { themeData1 } from "@/components/block/themes";
import factory from "@/components/block/components/factory";
import layout from "@/components/block/layout";
import { useGSAP } from "@gsap/react";
import _ from "lodash";

import audio5 from "@/public/5.mp3";
import audio6 from "@/public/6.mp3";
import audio7 from "@/public/7.mp3";
import {
  animationScrollTriggerCenter,
  animationScrollTriggerDefault,
  animationScrollTriggerEnd,
} from "@/utils/animationScrolltrigger";
import { splitText } from "@/utils/animationUtils";
import { ScrollTrigger, gsap } from "@/utils/registerAnimation";
import {
  scrollBlockAnimationCenter,
  scrollBlockAnimationEnd,
  scrollImageAnimationCenter,
  scrollImageAnimationEnd,
  scrollSlideAnimationDefault,
  scrollTextAnimation1,
  scrollTextAnimationCenter,
  scrollTextAnimationEnd,
} from "@/utils/animationTextEffect";
const config: Partial<IJsonModel> = {
  global: {
    tabEnableClose: false,
    tabEnableRename: false,
    tabEnableFloat: false,
    tabSetMinWidth: 50,
    tabSetMinHeight: 50,
    tabSetEnableDrop: false,
    tabSetEnableSingleTabStretch: true,
    borderAutoSelectTabWhenClosed: true,
    tabClassName: "customTab",
    splitterSize: 30,
  },
  borders: [],
};
const audios = [
  audio5,
  audio6,
  audio7,
  audio6,
  audio5,
  audio7,
  audio6,
  audio5,
  audio7,
  audio6,
  audio5,
  audio6,
  audio7,
  audio6,
  audio5,
  audio6,
];
export default function Home() {
  const timer = useRef<any>(null);
  const layoutRef = useRef<any>(null);
  const [list, setList] = useState<any[]>([]);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [themeData, setThemeData] = useState<any>(themeData1);
  const [listHeight, setListHeight] = useState<number[]>([]);

  const formatLayout = (data: any) => {
    const createComponent = (
      componentName: string,
      config: IJsonModel,
      ret: any
    ) => {
      return {
        type: "tabset",
        ...ret,
        children: [
          {
            type: "tab",
            id: uuidv4(),
            ...ret,
            component: componentName,
            config,
          },
        ],
      };
    };
    const format = (data: any, parentType?: string) => {
      const { type, component, children, config, ...ret } = data;

      switch (type) {
        case "row":
          if (parentType === "column") {
            const convertedJson = {
              type: "row",
              id: uuidv4(),
              ...ret,
              children: children.map((child: any) => format(child, type)),
            };
            return convertedJson;
          } else {
            const convertedJson = {
              type: "row",
              id: uuidv4(),
              ...ret,
              children: [
                {
                  type: "row",
                  ...ret,
                  children: children.map((child: any) => format(child, type)),
                },
              ],
            };
            return convertedJson;
          }
        case "column":
          if (parentType === "column") {
            const convertedJson = {
              type: "row",
              id: uuidv4(),
              ...ret,
              children: [
                {
                  type: "row",
                  id: uuidv4(),
                  ...ret,
                  children: children.map((child: any) => format(child, type)),
                },
              ],
            };
            return convertedJson;
          } else {
            const convertedJson = {
              type: "row",
              id: uuidv4(),
              ...ret,
              children: children.map((child: any) => format(child, type)),
            };
            return convertedJson;
          }
        default:
          break;
      }

      if (component) {
        return createComponent(component, config, ret);
      }

      if (children && children.length) {
        const dataChildren = children.map((child: any) => format(child, type));
        return { ...data, children: dataChildren };
      }
      return data;
    };
    return format(data);
  };
  const fortmatPhoneLayout = (data: any) => {
    const { type, children } = data;
    if (type === "column") {
      data.type = "row";
    }
    data.weight = 1;
    if (children && children.length) {
      const dataChildren = children.map((child: any) =>
        fortmatPhoneLayout(child)
      );
      return { ...data, children: dataChildren };
    }
    return data;
  };
  const initPcLayout = () => {
    let _list: any[] = [];
    JSON.parse(JSON.stringify(layout)).forEach((item: any, i: number) => {
      console.log(i, formatLayout(item));
      _list.push(formatLayout(item));
    });
    setList(_list);
    if (!listHeight.length) {
      console.log("listHeight", listHeight);
      setListHeight(Array(_list.length).fill(675));
    }
  };
  const initPhoneLayout = () => {
    let _data: any[] = [];
    let _list: any[] = [];
    JSON.parse(JSON.stringify(layout)).forEach((item: any, i: number) => {
      _data.push(fortmatPhoneLayout(item));
    });
    _data.forEach((item: any) => {
      _list.push(formatLayout(item));
    });
    setList(_list);
  };
  useEffect(() => {
    initPcLayout();
  }, []);
  const onResize = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const { clientWidth } = document.body as any;
      if (clientWidth <= 750) {
        initPhoneLayout();
      } else {
        initPcLayout();
      }
      setIsPhone(clientWidth <= 750);
    }, 500);
  };
  useEffect(() => {
    if (!list.length) return;
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [list]);

  const slideWrapRefs = useRef<HTMLDivElement[]>([]);
  const countRef = useRef(0);
  const scrollToRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSrc, setAudioSrc] = useState(audio5);
  const { context, contextSafe } = useGSAP(
    () => {
      function animation() {
        for (
          let slideIdx = 0;
          slideIdx < slideWrapRefs.current.length;
          slideIdx++
        ) {
          const slideWrapEl = slideWrapRefs.current[slideIdx];
          scrollSlideAnimationDefault(slideWrapEl);

          setTimeout(() => {
            const blockEls: HTMLElement[] = gsap.utils.toArray(
              slideWrapEl?.querySelectorAll(".flexlayout__tab")
            );
            blockEls.forEach((_, index) => {
              const windowHeight = window.innerHeight;
              const elementTop = Math.ceil(_.getBoundingClientRect().top);
              const scrollDistance = window.scrollY || window.pageYOffset;
              const scrollPosition =
                elementTop - (windowHeight - _.clientHeight) / 2;
              const scrollTo = Math.ceil(scrollDistance + scrollPosition);
              _.setAttribute("data-scroll-position", `${scrollTo}`);
              _.setAttribute("data-viewport", `${elementTop}`);

              scrollBlockAnimationCenter(
                _,
                (el: Element, progress: number, direction?: 1 | -1) => {
                  // 文字
                  const words: HTMLElement[] = gsap.utils.toArray(
                    el?.querySelectorAll(".word")
                  );
                  const renderWordLength = Math.ceil(
                    words.length * (direction! > 0 ? progress : 1 - progress)
                  );
                  for (let i = 0; i < renderWordLength; i++) {
                    const idx = direction! > 0 ? i : words.length - 1 - i;
                    const word = words[idx];
                    gsap.set(word, {
                      autoAlpha: direction! > 0 ? 1 : 0.2,
                    });
                  }
                  // 图片
                  const circleEl = el?.querySelector("circle");
                  gsap.set(circleEl, {
                    r: 800 - 800 * (1 - progress),
                  });
                }
              );
            });
            // 切割文字
            const pEls: HTMLElement[] = gsap.utils.toArray(
              slideWrapEl.querySelectorAll("p")
            );
            pEls.forEach((_) => {
              splitText(_, "word");
              const words: HTMLElement[] = gsap.utils.toArray(
                _?.querySelectorAll(".word")
              );
              gsap.set(words, { autoAlpha: 0.2, willChange: "opacity" });
            });
          }, 1000);
        }
      }
      animation();
    },
    { dependencies: [list] }
  );

  return (
    <section id="wrapper" className={`${isPhone ? "phone" : "pc"}`}>
      {list.map((item, index) => {
        return (
          <div
            className="slide-wrap w-[100vw] h-[100vh] relative"
            key={item.id}
            id={item.id}
            ref={(ref: HTMLDivElement) => (slideWrapRefs.current[index] = ref)}
            style={{
              padding: themeData.padding,
              background: themeData.background
                ? themeData.background[0]?.backgroundColor
                : "#ffffff",
            }}
          >
            <div className="slide">
              <Layout
                model={Model.fromJson({
                  ...config,
                  layout: item,
                })}
                ref={layoutRef}
                factory={(node) => factory(node, index, themeData)}
              />
            </div>
          </div>
        );
      })}

      <audio
        className="fixed bottom-0 left-0 z-9999"
        autoPlay
        controls
        ref={audioRef}
        src={audioSrc}
        onPlay={useCallback(() => {
          const blockEls = document.querySelectorAll(".flexlayout__tab");
          const blockEl = blockEls[countRef.current];
          const scrollTo = +blockEl.getAttribute("data-scroll-position")!;
          console.log(scrollTo, "scrollTo", scrollToRef.current);

          gsap.to(window, {
            scrollTo,
          });
          // gsap.effects.typewriter(blockEl.querySelectorAll(".word"), {});
          // gsap.effects.imageMark(blockEl.querySelectorAll("circle"), {});
        }, [])}
        onEnded={useCallback(() => {
          console.log(countRef.current, slideWrapRefs.current, "onEnded");
          countRef.current = (countRef.current + 1) % audios.length;
          setAudioSrc(audios[countRef.current]);
        }, [])}
      ></audio>
    </section>
  );
}
