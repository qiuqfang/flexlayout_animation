import d3 from "d3";
import { Element, ElementType, ParagraphType } from "../elements";
import { Component, ConfigData, GroupChildren, GroupComponent, GroupData, ImageElementData, ParagraphData } from "../index.d";
import { type HierarchyRectangularNode } from "d3-hierarchy";

// AI 生成的最小数据结构
export type AITreeNode = {
  group?: boolean;
  name?: string
  children: (AITreeNode | AITreeLeaf)[];
};

export type AITreeLeaf = {
  label?: ElementType | ParagraphType;
  content: string;
};

// 用于计算 Treemap 的数据结构
export type TreeNode = {
  type: "node";
  value: number;
  name: string;
  group: boolean;
  children: Tree[];
};

export type TreeLeaf = {
  type: "leaf";
  value: number;
  config: ConfigData; // 注意，这里的 component 只能是 group
    label: ElementType | 'group';
};

export type Tree = TreeNode | TreeLeaf;

// D3 的 节点定义
export type Node = HierarchyRectangularNode<Tree>;


// 用于切分的最小数据结构
export type PositionNode = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  leaf: TreeLeaf;
};

// 内置切分算法
export type TileMethod = typeof d3.treemapSquarify | typeof d3.treemapSliceDice;

export type NonEmptyArray<T> = T extends [] ? never : T[];

// type guards
export function isAITreeLeaf(obj: AITreeNode | AITreeLeaf): obj is AITreeLeaf {
  return (obj as AITreeLeaf).content !== undefined;
}

export function isAITreeNode(obj: AITreeNode | AITreeLeaf): obj is AITreeNode {
  return (obj as AITreeNode).children !== undefined;
}

export function isTreeLeaf(obj: Tree): obj is TreeLeaf {
  return obj && typeof obj === "object" && obj.type === "leaf";
}

export function isTreeNode(obj: Tree): obj is TreeNode {
  return (
    obj &&
    typeof obj === "object" &&
    obj.type === "node" &&
    Array.isArray(obj.children)
  );
}

export function isElement(obj: Element | GroupComponent): obj is Element {
  return (obj as Element).type !== undefined;
}

export function isElementData(config: ConfigData): config is Exclude<ConfigData, GroupData> {
  return (config as GroupData).type === undefined;
}
export function isImageElementData(
  config: ConfigData
): config is ImageElementData {

  const pattern = /\.(jpg|jpeg|png|gif|bmp|webp)$/i;
  return (
    config && (config as ImageElementData).content !== undefined && pattern.test((config as ImageElementData).content)
  );
}

// 计算一个list的大小
// TODO: 目前只是 demo 粗略计算，如果要精确计算需要与组件样式相关联，作为一个组件的方法 toValue 进行动态计算
// 这个得和志文的组件计算绑定，比如一个组件丢弃了某些元素后，计算的结果也会有变化
export function getGroupValue(groupData: GroupData) {
  const { type: groupType, children } = groupData;

  const paragraphValue: Record<ParagraphType, number> = {
    'title': 7,
    'headline': 6,
    'subheadline': 5,
    'normalText': 4,
    'link': 4
  }
  switch (groupType) {
    case "concatenation":
      return 50 + children.reduce((acc, child) => {
        if (child.type === 'image') {
          return acc + 200;
        } else if (child.type === 'paragraph') {
          const paragraphType: ParagraphType = child.paragraphType ?? 'normalText';
          return acc + (child.content ?? "").length * paragraphValue[paragraphType];
        } else {
          return acc + 150;
        }
      }, 0);
    default:
      return 200;
  }
}

// 把元素数组拍平成组件
// export function componentArrayToGroupData(components: (Element)[]): GroupData {
//   return {
//     "type": "concatenation", // TODO: hard code for demo
//     "children": components.map(component => ({
//           type: component.type,
//           paragraphType: component.paragraphType,
//           content: component.data.content
//         } as GroupChildren)),
//   };
// }