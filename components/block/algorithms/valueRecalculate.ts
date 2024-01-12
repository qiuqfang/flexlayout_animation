import {
  type Tree,
  isTreeLeaf,
  isTreeNode,
  isImageElementData,
  TreeNode,
  TreeLeaf,
  isElement,
  isElementData,
} from "./type";
import { PHI, clamp } from "../data/utils";
import { LoremIpsum } from "lorem-ipsum";
import { ConfigData, GroupData, ParagraphData } from "../index.d";
import { Element, ElementType, ParagraphType } from "../elements/"

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

// 更新一个node的所有子node值（先计算，如果子node样式均一致，则取子元素的max）
export function recalculate(node: Tree): number {
  if (node.type === "leaf") return node.value;
  if (node.children.length === 0) return node.value;

  if (node.group) {
    // group components should have the same size
    node.children.map(recalculate);
    const maxValue = Math.max(...node.children.map((child) => child.value));
    node.children.forEach((child) => (child.value = maxValue));
  }

  node.value = node.children.reduce((sum, child) => {
    return sum + recalculate(child);
  }, 0);
  return node.value;
}

// 将 label === 'group' 的每个子节点(组件) 中的子元素合并。
export function mergeGroup(node: TreeNode) {
  if (node.children.length === 0) return;
  if (node.group) {
    const children = node.children.filter(isTreeNode);
    node.children = [];
    for (let child of children) {
      const value = child.children.reduce((sum, child) => {
        return sum + child.value > 0 ? child.value : 100;
      }, 10);
      let groupData: GroupData = {
        type: "concatenation",
        children: child.children
          .filter(isTreeLeaf)
          .map((c: TreeLeaf) => ({
            type: c.label as ElementType,
            paragraphType: (c.config as ParagraphData).paragraphType as ParagraphType,
            content: (c.config as ParagraphData).content,
          })),
      };
      console.log('groupData', groupData)
      // Use the groupData variable as needed
      node.children.push({
        type: "leaf",
        label: "group",
        value: value,
        config: groupData,
      });
    }
  } else {
    node.children.filter(isTreeNode).forEach(mergeGroup);
  }
}

// 如果不将node的值重置为0，那么d3不会自己计算分配空间（推测d3会将所有数值等比例放大以平铺整个界面）
export function resetNodeToZero(node: Tree) {
  if (isTreeNode(node)) {
    node.value = 0;
    node.children.forEach(resetNodeToZero);
  }
}

// 计算除了图片之外的所有信息。未来可能只计算文本。
export function calculateLeaf(node: Tree, depth = 0) {
  if (isTreeLeaf(node)) {
    console.log("value大小 断点1.1", node);
    node.value = calculateValue(
      node.config,
      node.label ?? "",
      node.value,
      depth,
    );
    console.log("value大小 断点1.2", node);
    // update weight
  } else {
    node.children.forEach((child) => calculateLeaf(child, depth + 1));
  }
  // TODO: 图片大小需要额外计算。输入一个比值，计算出图片的大小。未来whitespace也可以考虑。
}

export function calculateImageLeaf(root: Tree, ratio: number) {
  const nodeCount = getImageNodeCount(root);
  const nodeTotal = calculateImageNodeTotal(nodeCount);
  const weightValue = (root.value * ratio) / nodeTotal; // 每一份的 value 是多少

  console.log(
    "aaa nodeTotal:",
    nodeTotal,
    "weightValue:",
    weightValue,
    "root.value:",
    root.value,
  );

  const dfs = (node: Tree, depth: number) => {
    if (isTreeNode(node)) {
      node.children.forEach((child) => {
        dfs(child, depth + 1);
      });
    } else if (isImageNode(node)) {
      console.log("aaa depth", depth, "nodes", nodeCount);
      const [count, weight] = nodeCount[depth]!;
      node.value = weight * weightValue;
    }
  };
  dfs(root, 0);
}

export function traverseAndModifyName(
  node: Tree,
  probability = 0.5,
  depth = 0,
): Tree {
  // 如果当前对象有 name 属性，根据概率随机决定是否添加文本
  if (
    isTreeLeaf(node) &&
    node.label !== "image" &&
    Math.random() < probability &&
    depth > 0 &&
    isElementData(node.config)
  ) {
    node.config.content +=
      node.label === "paragraph" ? lorem.generateSentences(2) : lorem.generateWords(3);
  }

  // 如果有 children 属性，递归遍历它们
  if (isTreeNode(node)) {
    node.children = node.children.map((child) =>
      traverseAndModifyName(child, probability, depth + 1),
    );
  }

  if (depth === 0) console.log("返回的树", node);
  return node;
}

export function calculateValue(
  config: ConfigData,
  label: string,
  oriValue: number,
  depth: number,
) {
  // 在这里先不计算图片大小
  if (label === "image") return 0;
  else if (label === "group") {
    return oriValue;
  }
  // 文字的情况
  const pLabel = (config as ParagraphData).paragraphType ?? "normalText";
  let size = 1;
  if (pLabel === "title") size = 10;
  else if (pLabel === "headline") size = 5;
  else if (pLabel === "subheadline") size = 4;
  else if (pLabel === "normalText") size = 1;

  // 计算文字大小
  let value = 0;
  if (label === 'paragraph') {
    value = ((config as ParagraphData).content ?? "").length * size * 2;
  }
  const maxValue = (2500 * (8 - depth)) / 8;
  return clamp(value, 20, maxValue);
}

export type ImageNodeCount = Record<number, [count: number, weight: number]>;

export function getImageNodeCount(node: Tree, depth = 0): ImageNodeCount {
  if (isImageNode(node)) {
    // 如果当前节点是isImageNode，则返回一个包含当前层级的记录，计数为1，权重为1
    return { [depth]: [1, 1] };
  }
  if (isTreeNode(node)) {
    const count: Record<number, [number, number]> = {};
    node.children.forEach((child) => {
      const childCount = getImageNodeCount(child, depth + 1);
      for (const key in childCount) {
        if (count[key]) {
          count[key]![0] += childCount[key]![0];
        } else {
          count[key] = childCount[key]!;
        }
      }
    });
    return count;
  }
  return {};
}

export function calculateImageNodeTotal(record: ImageNodeCount): number {
  return Object.values(record).reduce((sum, [count, weight]) => {
    return sum + count * weight;
  }, 0);
}

export function isImageNode(node: Tree): boolean {
  return isTreeLeaf(node) && node.label === "image";
}
