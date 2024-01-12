import { type Node } from "./type";

export function gridLayout(
  parent: Node,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
): void {
  // 一个组件排版算法，确保所有排列都是grid格式
  const nodes = parent.children;
  if (!nodes) return;

  const n = nodes.length;
  const numCols = Math.round(Math.sqrt(n));
  const numRows = Math.ceil(n / numCols);
  const cellWidth = (x1 - x0) / numCols;
  const cellHeight = (y1 - y0) / numRows;

  nodes.forEach((node, index) => {
    const row = Math.floor(index / numCols);
    const col = index % numCols;
    const x = x0 + col * cellWidth;
    const y = y0 + row * cellHeight;

    node.x0 = x;
    node.y0 = y;
    node.x1 = x + cellWidth;
    node.y1 = y + cellHeight;
  });
}