import { type HierarchyRectangularNode } from "d3-hierarchy";
import {
  treemapBinary,
  treemapDice,
  treemapSlice,
  treemapSliceDice,
  treemapSquarify,
  treemapResquarify,
} from "d3";
import { gridLayout } from "./TreemapGrid";
import { type Node, TreeNode } from "./type";
// 先slice/dice，再squarify
export function title1(
  parent: Node,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
) {
  // 可以根据children数量判断？
  // 如果只有两个，根据value 比例判断：如果占比小于30，只能slice，否则随机
  // FIXME: 现在递归只会到node层级，不会到leaf层级
  // if (isTreeLeaf(parent.data) && parent.data.label === "h1") {
  //   treemapSlice(parent, x0, y0, x1, y1);
  // }
  // TODO: children if have h1, to slice
  const children = parent.children;

  // if (children && children.some((child) => child.data.label === 'h1')) {
  //   treemapSlice(parent, x0, y0, x1, y1);
  // }
  if (children && children.length === 2) {
    const value0 = children[0]!.value;
    const value1 = children[1]!.value;

    if (value0 && value1) {
      const ratio = value0 / (value0 + value1);
      if (ratio < 0.33 || ratio > 0.66) {
        console.log("slice", ratio);
        treemapSlice(parent, x0, y0, x1, y1);
      } else {
        console.log("dice", ratio);
        // 改成随机
        // treemapDice(parent, x0, y0, x1, y1);
        treemapSquarify(parent, x0, y0, x1, y1);
      }
    } else {
      treemapDice(parent, x0, y0, x1, y1);
    }
  } else if ((parent.data as TreeNode).group) {
    // 组的情况，根据剩余长宽比判断怎么切。如果偶数，则squarify，奇数则一种方向。
    if (children?.length && children?.length % 2 === 0) {
      // TODO: 还是有隐患的，比如2横2竖的情况
      gridLayout(parent, x0, y0, x1, y1);
    } else if ((y1 - y0) / (x1 - x0) > 1) {
      treemapSlice(parent, x0, y0, x1, y1);
    } else {
      treemapDice(parent, x0, y0, x1, y1);
    }
  } else {
    treemapSquarify(parent, x0, y0, x1, y1);
  }
  // (parent. & 1 ? slice : dice)(parent, x0, y0, x1, y1);
}