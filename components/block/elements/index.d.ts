import { ParagraphData, ImageElementData } from "./elements/index.d";
// 背景风格
export type BackgroundStyle = {
    backgroundColor?: string;
    backgroundImage?: string;
    position?: string;         // 背景位置，如 'center center'
  }


// 边框风格
export type BorderStyle = {
    borderStyle: string;
    borderWidth: number | string;
    borderColor: string;
  }


// 卡片风格
export type CardStyle = {
    background?: BackgroundStyle;
    boxShadow?: string;
    padding?: number | string;
    margin?: number | string;
    borderRadius?: number | string;
    border?: BorderStyle;
    layout?: "row" | "column" | Function;
  }

  // 原子元素
export type Element = {
  type: ElementType;
  paragraphType?: ParagraphType,
  data: ParagraphData | ImageElementData;
}
// 原子元素类型
export type ElementType = "paragraph" | "image" | 'icon' | 'chart' | 'shape' | 'video' | 'map' | 'table'

// 段落类型
export type ParagraphType = 'title' | 'headline' | 'subheadline' | 'normalText' | 'link'

