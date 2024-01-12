
// 组件
type Component = {
    element: Element | Element[];
    styles?: ComponentStyle
  }
  
  // 组件风格
  type ComponentStyle = {
    background?: BackgroundStyle;
    boxShadow?: string;
    border?: BorderStyle;
    padding?: number | string;
    margin?: number | string;
    layout?: "row" | "column" | Function;
  }
  
  // 组件集合
  type ComponentGroup = {
    components: Component[];
    layout: ComponentGroupLayout;
  }
  
  // 组件布局
  type ComponentGroupLayout = {
    type: GroupType;
    gap: number;
    // 排列方式
    direction?: Function,
  }
  
  // 组类型:       并列 | 循环 | 流程 | 矩阵 | 层次结构 | 棱锥
  export type GroupType = "concatenation" | "loop" | "process" | "matrix" | "level" | "pyramid";
  