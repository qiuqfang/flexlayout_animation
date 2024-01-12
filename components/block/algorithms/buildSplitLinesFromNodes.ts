import { PositionNode, Tree, TreeLeaf, isTreeLeaf } from "./type";
import { Direction, Component, ConfigData, GroupData, ParagraphData, Layout } from "../index.d";
import { Element, ElementType, ParagraphType } from "../elements/"


function buildComponentFromNode(
  node: PositionNode, // 定位信息
  direction: Direction, // 决定切分方向
): Component {
  return {
    component: node.leaf.label,
    weight: direction === "row" ? node.y1 - node.y0 : node.x1 - node.x0,
    config: node.leaf.config,
  };
}

function findNodesForSplit(
  positionNodes: PositionNode[],
  rootX0: number,
  rootY0: number,
  rootX1: number,
  rootY1: number,
  weight = 1,
): Layout | null {
  console.log(
    "-----------------------------运行findNodesForSplit---------------------",
  );
  // the unique x0
  const allX0 = new Set(
    positionNodes
      .map((node) => node.x0)
      .filter((x0) => !isAlmostSame(x0, rootX0) && !isAlmostSame(x0, rootX1)),
  );
  console.log("所有x0", allX0);
  // 检查对于每个 x0，他们的y是否可以构成完整的边
  for (const x0 of Array.from(allX0)) {
    const sameX0Nodes = positionNodes.filter((node) =>
      isAlmostSame(node.x0, x0),
    );
    const y0s = sameX0Nodes.map((node) => node.y0);
    const y1s = sameX0Nodes.map((node) => node.y1);
    const minY0 = Math.min(...y0s);
    const maxY1 = Math.max(...y1s);
    if (isAlmostSame(minY0, rootY0) && isAlmostSame(maxY1, rootY1)) {
      console.log("找到了x0", x0);
      // 找到了一条完整的边，左边临靠这个边的一组元素是 sameX0Nodes
      // 但是右边的元素可能比 sameX0Nodes 多，一次实际计算不能按照 sameX0Nodes 算
      const leftNodes = positionNodes.filter((l) =>
        isAlmostSmallerEqualTo(l.x1, x0),
      );
      console.log("从1执行build", leftNodes);
      // console.log("此时右边还剩余：", positionNodes.filter((l) => isAlmostGreaterEqualTo(l.x0, x0)));
      // 左边的
      const leftLayout = buildSplitLinesFromNodes(
        leftNodes,
        rootX0,
        rootY0,
        x0, // 注意这里实际上应该是左边节点中最大的x1，如果Treemap中有padding的话这个计算会有问题
        rootY1,
        "row",
        x0 - rootX0,
      );

      const rightNodes = positionNodes.filter((l) =>
        isAlmostGreaterEqualTo(l.x0, x0),
      );
      // 右边的
      console.log("从2执行build", rightNodes);
      const rightLayout = buildSplitLinesFromNodes(
        rightNodes,
        x0,
        rootY0,
        rootX1,
        rootY1,
        "row",
        rootX1 - x0,
      );
      // 找到了一条完整的边
      return {
        type: "column",
        weight: weight,
        children: [leftLayout, rightLayout],
      };
    }
  }

  const allY0 = new Set(
    positionNodes
      .map((node) => node.y0)
      .filter((y0) => !isAlmostSame(y0, rootY0) && !isAlmostSame(y0, rootY1)),
  );
  // 检查对于每个 y0，他们的x是否可以构成完整的边
  for (const y0 of Array.from(allY0)) {
    const sameY0Nodes = positionNodes.filter((node) =>
      isAlmostSame(node.y0, y0),
    );
    const x0s = sameY0Nodes.map((node) => node.x0);
    const x1s = sameY0Nodes.map((node) => node.x1);
    const minX0 = Math.min(...x0s);
    const maxX1 = Math.max(...x1s);
    if (isAlmostSame(minX0, rootX0) && isAlmostSame(maxX1, rootX1)) {
      // 找到了一条完整的边，上临靠这个边的一组元素是 sameY0Nodes
      // 但是下边的元素可能比 sameY0Nodes 多，一次实际计算不能按照 sameY0Nodes 算
      const topNodes = positionNodes.filter((l) =>
        isAlmostSmallerEqualTo(l.y1, y0),
      );
      // 上边的
      console.log("从3执行build", topNodes);
      const topLayout = buildSplitLinesFromNodes(
        topNodes,
        rootX0,
        rootY0,
        rootX1,
        y0,
        "column",
        y0 - rootY0,
      );

      const bottomNodes = positionNodes.filter((l) =>
        isAlmostGreaterEqualTo(l.y0, y0),
      );
      // 下边的
      console.log("从4执行build", bottomNodes);

      const bottomLayout = buildSplitLinesFromNodes(
        bottomNodes,
        rootX0,
        y0,
        rootX1,
        rootY1,
        "column",
        rootY1 - y0,
      );
      // 找到了一条完整的边
      return {
        type: "row",
        weight: weight,
        children: [topLayout, bottomLayout],
      };
    }
  }

  return null;
}

// 根据现有坐标，进行切分
export function buildSplitLinesFromNodes(
  positionNodes: PositionNode[],
  rootX0: number,
  rootY0: number,
  rootX1: number,
  rootY1: number,
  direction: Direction = "row",
  weight = 1,
): Layout | Component {
  // 返回根据positionNodes和给定画布宽高构建的layout
  const rootWidth = rootX1 - rootX0;
  const rootHeight = rootY1 - rootY0;
  console.log(
    "现在我要排版的内容是",
    positionNodes,
  );
  if (positionNodes.length === 1) {
    console.log("从1执行组件生成");
    return buildComponentFromNode(positionNodes[0]!, direction);
  }

  let layout: Layout = {
    type: "row",
    weight: weight,
    children: [],
  };

  // find the edge that has maximum width or height
  // 首先，找有没有一整个的分割线（即一个组件占据最大画布）
  for (const node of positionNodes) {
    const width = node.x1 - node.x0;
    const height = node.y1 - node.y0;

    // TODO: 原则上需要根据组来分，但是目前实现先随便分分
    const newDirection: Direction | null = isAlmostSame(rootHeight, height)
      ? "column"
      : isAlmostSame(rootWidth, width)
        ? "row"
        : null;
    if (newDirection === null) continue;

    // 每次遍历时，找到一个符合最大边的node，然后将其从positionNodes中移除
    if (newDirection) {
      // if this is the edge node
      // remove the leaf from leaves
      console.log("当前的nodes", node);
      positionNodes = positionNodes.filter((l) => l !== node);
      // 判断水平还是垂直，再判断是在中间切分还是在边缘切分，递归
      if (newDirection === "column") {
        // 修改排版方式
        layout.type = "column";
        // layout.weight = rootWidth;
        // 移除使用过的node
        const leftNodes = positionNodes.filter((l) =>
          isAlmostSmallerEqualTo(l.x1, node.x0),
        );
        if (leftNodes.length > 0) {
          // 左边递归
          console.log("从5执行build");
          layout.children.push(
            buildSplitLinesFromNodes(
              leftNodes,
              rootX0,
              rootY0,
              node.x0,
              rootY1,
              newDirection,
              node.x0 - rootX0,
            ),
          );
        }

        layout.children.push(buildComponentFromNode(node, newDirection));
        const rightNodes = positionNodes.filter((l) =>
          isAlmostGreaterEqualTo(l.x0, node.x1),
        );
        if (rightNodes.length > 0) {
          // 右边递归
          console.log("从6执行build");
          console.log("右边的nodes", rightNodes);
          // debugger;
          console.log("从6执行组件生成");
          layout.children.push(
            buildSplitLinesFromNodes(
              rightNodes,
              node.x1,
              rootY0,
              rootX1,
              rootY1,
              newDirection,
              rootX1 - node.x1,
            ),
          );
        }
      } else if (newDirection === "row") {
        // 修改排版方式
        layout.type = "row";
        // layout.weight = rootHeight;
        // 移除使用过的node

        const topNodes = positionNodes.filter((l) =>
          isAlmostSmallerEqualTo(l.y1, node.y0),
        );
        console.log("筛选前的nodes", positionNodes);
        console.log("筛选后上方的nodes", topNodes);
        if (topNodes.length > 0) {
          // 上边边递归
          console.log("从7执行build");

          layout.children.push(
            buildSplitLinesFromNodes(
              topNodes,
              rootX0,
              rootY0,
              rootX1,
              node.y0,
              newDirection,
              node.y0 - rootY0,
            ),
          );
        }
        layout.children.push(buildComponentFromNode(node, newDirection));

        const bottomNodes = positionNodes.filter((l) =>
          isAlmostGreaterEqualTo(l.y0, node.y1),
        );
        console.log("筛选前的nodes", positionNodes);
        console.log("筛选后下方的nodes", bottomNodes);
        if (bottomNodes.length > 0) {
          // 下边递归
          console.log("从8执行build");

          console.log("从8执行组件生成");
          layout.children.push(
            buildSplitLinesFromNodes(
              bottomNodes,
              rootX0,
              node.y1,
              rootX1,
              rootY1,
              newDirection,
              rootY1 - node.y1,
            ),
          );
        }
      }

      // 只要找到一条边，就可以退出循环
      break;
    }
  }

  if (layout.children.length === 0) {
    // 没有找到一条边，那么就是没有完整的分割线，需要找子元素的组
    const subLayout = findNodesForSplit(positionNodes, rootX0, rootY0, rootX1, rootY1, weight);
    if (subLayout) layout = subLayout;
  }
  return layout;
}

export function getPositionNodes(
  root: d3.HierarchyRectangularNode<Tree>,
): PositionNode[] {
  return root.leaves().map((leaf) => {
    return {
      x0: leaf.x0,
      y0: leaf.y0,
      x1: leaf.x1,
      y1: leaf.y1,
      leaf: leaf.data as TreeLeaf, // 这里一定是叶节点
    };
  });
}

export function buildLayout(root: d3.HierarchyRectangularNode<Tree>): Layout {
  const { x0: rootX0, y0: rootY0, x1: rootX1, y1: rootY1 } = root;
  const positionNodes = getPositionNodes(root);
  return buildSplitLinesFromNodes(positionNodes, rootX0, rootY0, rootX1, rootY1) as Layout;
}

// 在计算layout时可能要取四舍五入
function isAlmostSame(l1: number, l2: number) {
  return Math.abs((l1 - l2) / 900) < 0.05;
}

function isAlmostGreaterEqualTo(l1: number, l2: number) {
  return l1 >= l2 || Math.abs((l1 - l2) / 900) < 0.05;
}

function isAlmostSmallerEqualTo(l1: number, l2: number) {
  return l1 <= l2 || Math.abs((l1 - l2) / 900) < 0.05;
}
