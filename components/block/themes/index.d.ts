// 主题设计
export type Theme = {
    colors: ColorsStyle,
    paragraph: {
      title?: ParagraphStyle;
      headline?: ParagraphStyle;
      subheadline?: ParagraphStyle;
      normalText?: ParagraphStyle;
      link?: ParagraphStyle;
    },
    background?: BackgroundStyle[];
    alignment?: AlignmentStyle[],
    card?: CardStyle[],
    image?: ImageStyle[],
    padding?: number | string;
  }
  
  // 颜色风格
  type ColorsStyle = {
    primary: string;        // 主要颜色
    secondary?: string;      // 次要颜色
    accent?: string;         // 强调颜色
    text: string;           // 文本颜色
    link?: string;           // 链接文本颜色
  }
  
  // 段落风格
  type ParagraphStyle = {
    fontFamily: string;
    fontSize: number | string;
    fontWeight?: number | string;
    lineHeight?: number | string;
    textAlign?: 'left' | 'center' | 'right';
    wordSpacing?: number | string;
    textShadow?: string;
    card?: CardStyle,
    alignment?: AlignmentStyle,
  }
  
  // 背景风格
  type BackgroundStyle = {
    backgroundColor?: string;
    backgroundImage?: string;
    position?: string;         // 背景位置，如 'center center'
  }
  
  // 对齐风格
  export type AlignmentStyle = {
    horizontal: 'flex-start' | 'center' | 'flex-end';
    vertical:  'felx-start' | 'center' | 'flex-end';
  }
  
  // 卡片风格
  type CardStyle = {
    background?: BackgroundStyle;
    boxShadow?: string;
    padding?: number | string;
    margin?: number | string;
    borderRadius?: number | string;
    border?: BorderStyle;
    layout?: "row" | "column" | Function;
  }
  
  // 边框风格
  type BorderStyle = {
    borderStyle: string;
    borderWidth: number | string;
    borderColor: string;
  }
  
  // 图片风格
  type ImageStyle = {
    mask?: string;
    card?: CardStyle
  }
