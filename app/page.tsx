"use client";
import { Layout, Model } from "@qiuqfang/flexlayout-react";
import { v4 as uuidv4 } from "uuid";
import "@qiuqfang/flexlayout-react/style/light.css";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Moveable, { OnDrag, OnResize, OnScale } from "react-moveable";

type ILayout = {
  type: "row" | "column";
  weight?: number;
  background?: string;
  children: (ILayout | IComponent)[];
};

type IComponent = {
  component: ComponentName;
  config: ImageConfig | TextConfig | ListConfig;
  weight?: number;
  contentClassName?: string;
};

type ComponentName =
  | "image"
  | "h1"
  | "h2"
  | "p"
  | "list-text"
  | "list-img-text";

type ImageConfig = {
  src: string;
  alt?: string;
  id?: number;
};

type TextConfig = {
  content: string;
};

type ListConfig = {
  title?: string;
  img?: string;
  alt?: string;
  content?: string;
  background?: string;
};

const data: ILayout[] = [
  {
    type: "column",
    weight: 1,
    children: [
      {
        weight: 2,
        component: "image",
        config: {
          id: 1,
          src: "https://image.lexica.art/full_webp/34de87dc-77aa-4505-94a7-213341e6f4a4",
        },
      },
      {
        weight: 1,
        component: "p",
        config: {
          content:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      },
      {
        weight: 1,
        component: "p",
        config: {
          content:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      },
    ],
  },
  {
    type: "column",
    weight: 1,
    children: [
      {
        weight: 2,
        component: "image",
        config: {
          src: "https://image.lexica.art/full_webp/cf298d56-8e26-47e1-b3ef-58924d314716",
        },
      },
      {
        type: "row",
        weight: 2,
        children: [
          {
            weight: 1,
            component: "h1",
            contentClassName: "flex items-end",
            config: {
              content: "Card Title",
            },
          },
          {
            weight: 2,
            component: "p",
            config: {
              content:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          },
        ],
      },
    ],
  },
  {
    type: "column",
    weight: 1,
    children: [
      {
        weight: 1,
        component: "image",
        config: {
          src: "https://image.lexica.art/full_webp/cf298d56-8e26-47e1-b3ef-58924d314716",
        },
      },
      {
        type: "column",
        weight: 3,
        children: [
          {
            weight: 1,
            component: "h1",
            contentClassName: "flex items-end",
            config: {
              content: "Card Title",
            },
          },
          {
            weight: 1,
            component: "p",
            config: {
              content:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          },
        ],
      },
    ],
  },
  {
    type: "row",
    weight: 1,
    background:
      "https://image.lexica.art/full_webp/88921388-14c5-4fde-85a1-67a8095f076e",
    children: [
      {
        weight: 1,
        component: "h1",
        contentClassName: "flex items-center",
        config: {
          content: "深海环境的不同",
        },
      },
      {
        type: "column",
        weight: 2,
        children: [
          {
            weight: 1,
            component: "h2",
            contentClassName: "flex justify-center items-center",
            config: {
              content: "浅海",
              // title: '浅海',
              // content: '明亮、充满氧气、有光线和植物、水温较暖和浅。'
            },
          },
          {
            weight: 1,
            component: "h2",
            contentClassName: "flex justify-center items-center",
            config: {
              content: "深海底",
            },
          },
          {
            weight: 1,
            component: "h2",
            contentClassName: "flex justify-center items-center",
            config: {
              content: "中层海域",
            },
          },
        ],
      },
    ],
  },
  {
    type: "row",
    weight: 1,
    children: [
      {
        type: "row",
        weight: 1,
        children: [
          {
            weight: 1,
            component: "h1",
            contentClassName: "flex items-center",
            config: {
              content: "深海怪兽特征和行为",
            },
          },
          {
            type: "column",
            weight: 2,
            children: [
              {
                weight: 1,
                component: "list-text",
                config: {
                  title: "生物发光",
                  background:
                    "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  content: `黑暗的深海中，很多生物发光。这种能力有时用于引诱猎物或吓跑敌人。`,
                },
              },
              {
                weight: 1,
                component: "list-text",
                config: {
                  title: "身体奇特",
                  background: "#F6928B",
                  content:
                    "深海怪兽通常长得古怪，身体特别适应深海环境。它们的巨大眼睛、锋利的齿、巨大的颚等都是为了适应深海环境",
                },
              },
            ],
          },
          {
            type: "column",
            weight: 2,
            children: [
              {
                weight: 1,
                component: "list-text",
                config: {
                  title: "捕食方式",
                  background:
                    "https://images.unsplash.com/photo-1627608690902-98b7c511181d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  content:
                    "由于深海环境极度恶劣，需要依靠独特的部位（如钩爪、大颚）或者罕见的能力（如电击）来捕获猎物。",
                },
              },
              {
                weight: 1,
                component: "list-text",
                config: {
                  title: "极速生长",
                  background: "#E51A6C",
                  content:
                    "与其他生物相比，深海怪兽可以在极端环境下生长并迅速进化。",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "row",
    weight: 1,
    children: [
      {
        weight: 1,
        component: "h1",
        contentClassName: "flex items-center",
        config: {
          content: "已知深海生物的种类",
        },
      },
      {
        type: "column",
        weight: 4,
        children: [
          {
            weight: 1,
            component: "list-img-text",
            contentClassName: "flex justify-center",
            config: {
              title: "冰山虫",
              content:
                "深海沉积物中的无脊椎动物。它们有类似于蚕蛾的体形，长达2.5厘米。",
              src: "https://image.lexica.art/full_webp/6df1c6b8-85f5-480a-805e-cd483158d9f6",
            },
          },
          {
            weight: 1,
            component: "list-img-text",
            contentClassName: "flex justify-center",
            config: {
              title: "海兔",
              content:
                "一类软体动物，通常生活在浅海区。在深海底的岩石上，海兔及其亲属的身躯难以置信的漂浮在水上。",
              src: "https://image.lexica.art/full_webp/3ae11286-bf2d-4593-b474-8d82676a053d",
            },
          },
          {
            weight: 1,
            component: "list-img-text",
            contentClassName: "flex justify-center",
            config: {
              title: "海蝴蝶",
              content:
                "掌管深海景观的一类中层浮游动物。彩虹般的羽状器官展开后，能自由游动，晚上竖立起来以吸取营养。",
              src: "https://image.lexica.art/full_webp/87ea23b1-4703-4d28-88aa-e248608be56b",
            },
          },
        ],
      },
    ],
  },
  {
    type: "row",
    weight: 1,
    children: [
      {
        weight: 1,
        component: "h1",
        contentClassName: "flex items-center",
        config: {
          content: "深海怪兽的未知领域",
        },
      },
      {
        type: "row",
        weight: 4,
        children: [
          {
            weight: 1,
            component: "h2",
            config: {
              content: "深海温泉",
            },
          },
          {
            weight: 1,
            component: "h2",
            config: {
              content: "深海鱼谷",
            },
          },
          {
            weight: 1,
            component: "h2",
            config: {
              content: "深海山脊",
            },
          },
        ],
      },
    ],
  },
];

const config: any = {
  global: {
    tabEnableClose: false,
    enableRename: false,
    enableFloat: false,
    tabSetMinWidth: 50,
    tabSetMinHeight: 50,
    tabSetEnableDrop: false,
    tabSetEnableSingleTabStretch: true,
    borderAutoSelectTabWhenClosed: true,
    tabClassName: "customTab",
    splitterSize: 5,
  },
  borders: [],
  layout: {},
};

const factory = (node: any) => {
  var component = node.getComponent();
  const config = node.getConfig();
  const nodeId = `tab-${node._attributes.id}`;

  if (!config) return null;

  switch (component) {
    case "image":
      return config.id ? (
        <div className="relative component-img pointer-events-none" id={nodeId}>
          <img className="w-full h-full object-cover" src={config.src} />
          <div className="absolute top-[-20px] left-[-20px] right-[-20px] bottom-[-20px] z-10  rounded-full border-solid border-4 border-red-300 flex justify-start items-start"></div>
          <div className="absolute top-0 left-0 w-full h-full  flex justify-start items-start">
            <p className="bg-indigo-400 rounded-md min-h-[40px] text-white flex items-center">
              左上
            </p>
          </div>
          <div className="absolute top-0 left-20 w-full h-full flex justify-end items-end z-10">
            <p className="bg-indigo-400 rounded-md min-h-[40px] text-white flex items-center">
              右下
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <p className="bg-indigo-400 rounded-md min-h-[40px] text-white flex items-center">
              居中
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end">
            <p className="bg-indigo-400 rounded-md min-h-[40px] text-white flex items-center mb-[0px] md:mb-[50px] ">
              下中文本文本文本
            </p>
          </div>
        </div>
      ) : (
        <img
          className="component-img w-full h-full object-cover"
          id={nodeId}
          src={config.src}
        />
      );
    case "h1":
      return (
        <p className="c omponent-h1" id={nodeId}>
          {config.content}
        </p>
      );
    case "h2":
      return (
        <p className="component-h2" id={nodeId}>
          {config.content}
        </p>
      );
    case "list-text":
      return (
        <div
          className="component-list-text p-[20px]"
          id={nodeId}
          style={{
            background: config.background.includes("http")
              ? `url(${config.background}) no-repeat `
              : config.background,
          }}
        >
          <p className="component-list-text-t1">{config.title}</p>
          <p className="component-list-text-t2">{config.content}</p>
        </div>
      );
    case "list-img-text":
      return (
        <div className="component-list-img-text" id={nodeId}>
          <img className="component-list-img-text-img" src={config.src} />
          <p className="component-list-img-text-t1">{config.title}</p>
          <p className="component-list-img-text-t2">{config.content}</p>
        </div>
      );
    default:
      return (
        <p className="component-p" id={nodeId}>
          {config.content}
        </p>
      );
  }
};

export default function Home() {
  const timer = useRef<any>(null);
  const layoutRef = useRef<any>(null);
  let activeSlideIndexRef = useRef<number>(0);
  const [list, setList] = useState<any[]>([]);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number[]>([]);
  // const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const formatLayout = (data: any) => {
    const createComponent = (componentName: string, config: any, ret: any) => {
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

  const onAddIndirectClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("layoutRef", layoutRef);
    layoutRef.current.addTabWithDragAndDropIndirect(
      "Add Content\n(Drag to location)",
      {
        component: "h2",
        config: {
          content: "Custom Text Content",
        },
      },
      () => {
        console.log("onAddIndirectClick");
      }
    );
  };

  useEffect(() => {
    initPcLayout();
  }, []);

  useEffect(() => {
    if (!list.length) return;

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [list]);

  const initPcLayout = () => {
    let _list: any[] = [];
    JSON.parse(JSON.stringify(data)).forEach((item: any, i: number) => {
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
    JSON.parse(JSON.stringify(data)).forEach((item: any, i: number) => {
      _data.push(fortmatPhoneLayout(item));
    });
    _data.forEach((item: any) => {
      _list.push(formatLayout(item));
    });
    setList(_list);
  };

  const onResize = () => {
    console.log("onResize");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const { clientWidth } = document.body as any;
      console.log(clientWidth);
      if (clientWidth <= 750) {
        initPhoneLayout();
      } else {
        initPcLayout();
      }
      setIsPhone(clientWidth <= 750);
    }, 500);
  };

  const getIds = (model: any) => {
    let ids: any[] = [];
    const get = (childs: any[], parentType: string) => {
      for (const item of childs) {
        if (item._attributes.type === "row") {
          if (parentType === "row") {
            const tabsets = item._children.filter(
              (item: any) => item._attributes.type === "tabset"
            );
            const tabs = tabsets.map(
              (item: any) => item._children[0]._attributes.id
            );
            ids.push(tabs);
          }
          if (item._children) {
            get(item._children, item._attributes.type);
          }
        }
      }
    };
    get([model._root], model._root._attributes.type);
    return ids;
  };

  const [currentSlideItemModuleEl, setCurrentSlideItemModuleEl] =
    useState<HTMLElement | null>();
  // const [tabEnableDrag, setTabEnableDrag] = useState(true);

  const onModelChange = (...e: any) => {
    console.log("onModelChange", e);
    const [model, action] = e;
    const rowIds = getIds(model);
    // console.log('rowIds', rowIds);
    // Promise.resolve().then(() => {
    //   let rowsMaxHeight: number[] = [];
    //   rowIds.forEach((row: string[]) => {
    //     let columnMaxHeight = 0;
    //     row.forEach((id: string, index: number) => {
    //       const node = document.querySelector(`#tab-${id}`)
    //       const height = node?.clientHeight || 0;
    //       if(columnMaxHeight < height) {
    //         columnMaxHeight = height;
    //       }
    //     })
    //     rowsMaxHeight.push(columnMaxHeight);
    //   })
    //   console.log('rowsMaxHeight', rowsMaxHeight);
    //   console.log('max', Math.max(...rowsMaxHeight));
    //   const maxHeight = Math.max(...rowsMaxHeight);
    //   console.log('activeSlideIndex', activeSlideIndexRef.current);

    //   document.querySelectorAll('.slide')[activeSlideIndexRef.current].style.height = `${maxHeight}px`;
    // setListHeight(listHeight.map((n: number, index: number) => (index === activeSlideIndex ? maxHeight: n)));
    // })
  };

  return (
    <main id="wrapper" className={isPhone ? "phone" : "pc"}>
      {list.map((item: any, index: number) => (
        <div
          className="slide"
          key={index}
          onMouseEnter={() => {
            console.log("onMouseDown", index);
            activeSlideIndexRef.current = index;
          }}
          style={{
            // height: listHeight[index],
            background: item.background ? `url(${item.background})` : "#241631",
          }}
        >
          <Layout
            model={Model.fromJson({
              ...config,
              layout: item,
            })}
            ref={layoutRef}
            factory={factory}
            onModelChange={onModelChange}
          />
        </div>
      ))}
      <button
        className="add inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white"
        onClick={onAddIndirectClick}
      >
        Add text
      </button>
      <Moveable
        flushSync={flushSync}
        target={currentSlideItemModuleEl}
        container={null}
        origin={true}
        edge={false}
        /* draggable */
        draggable={true}
        throttleDrag={0}
        // onDragStart={({ target, clientX, clientY }) => {
        //   console.log("onDragStart", target);
        // }}
        onDrag={({
          target,
          beforeDelta,
          beforeDist,
          left,
          top,
          right,
          bottom,
          delta,
          dist,
          transform,
          clientX,
          clientY,
        }: OnDrag) => {
          console.log("onDrag left, top", left, top);
          // target!.style.left = `${left}px`;
          // target!.style.top = `${top}px`;
          console.log("onDrag translate", dist);
          target!.style.transform = transform;
        }}
        // onDragEnd={({ target, isDrag, clientX, clientY }) => {
        //   console.log("onDragEnd", target, isDrag);
        // }}
        /* When resize or scale, keeps a ratio of the width, height. */
        keepRatio={true}
        /* resizable*/
        /* Only one of resizable, scalable, warpable can be used. */
        resizable={true}
        throttleResize={0}
        // onResizeStart={({ target, clientX, clientY }) => {
        //   console.log("onResizeStart", target);
        // }}
        onResize={({
          target,
          width,
          height,
          dist,
          delta,
          direction,
          clientX,
          clientY,
        }: OnResize) => {
          console.log("onResize", target);
          delta[0] && (target!.style.width = `${width}px`);
          delta[1] && (target!.style.height = `${height}px`);
        }}
        // onResizeEnd={({ target, isDrag, clientX, clientY }) => {
        //   console.log("onResizeEnd", target, isDrag);
        // }}
        /* scalable */
        /* Only one of resizable, scalable, warpable can be used. */
        scalable={true}
        throttleScale={0}
        // onScaleStart={({ target, clientX, clientY }) => {
        //   console.log("onScaleStart", target);
        // }}
        onScale={({
          target,
          scale,
          dist,
          delta,
          transform,
          clientX,
          clientY,
        }: OnScale) => {
          console.log("onScale scale", scale);
          target!.style.transform = transform;
        }}
        // onScaleEnd={({ target, isDrag, clientX, clientY }) => {
        //   console.log("onScaleEnd", target, isDrag);
        // }}
        /* rotatable */
        rotatable={true}
        throttleRotate={0}
        // onRotateStart={({ target, clientX, clientY }) => {
        //   console.log("onRotateStart", target);
        // }}
        onRotate={({
          target,
          delta,
          dist,
          transform,
          clientX,
          clientY,
        }: any) => {
          console.log("onRotate", dist);
          target!.style.transform = transform;
        }}
        // onRotateEnd={({ target, isDrag, clientX, clientY }) => {
        //   console.log("onRotateEnd", target, isDrag);
        // }}
        // Enabling pinchable lets you use events that
        // can be used in draggable, resizable, scalable, and rotateable.
        // pinchable={true}
        // onPinchStart={({ target, clientX, clientY, datas }) => {
        //   // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
        //   console.log("onPinchStart");
        // }}
        // onPinch={({ target, clientX, clientY, datas }) => {
        //   // pinch event occur before drag, rotate, scale, resize
        //   console.log("onPinch");
        // }}
        // onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
        //   // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
        //   console.log("onPinchEnd");
        // }}
      />
    </main>
  );
}
