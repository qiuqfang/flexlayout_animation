import { ElementType, ParagraphType } from "./elements";
import { ImageElementData } from "./elements/image";
import { GroupType } from "./components/index.d";

export type Direction = "row" | "column";
// export type LayoutComponent = Layout | Component;
export type ConfigData = ParagraphData | ImageElementData | GroupData;

export type Layout = {
    type?: "row" | "column";
    weight?: number;
    children?: (Layout | Component)[];
};

type Component = {
    component: ElementType | 'group';
    config: ComponentConfig,
    weight?: number;
};

export type ComponentConfig = ParagraphData | ImageElementData | GroupData;

type GroupComponent = Component & {
    component: 'group';
    config: GroupData;
};
type ParagraphData = {
    paragraphType?: ParagraphType,
    content: string;
}

type ImageElementData = {
    content: string;
}

type GroupData = {
    type: GroupType;
    children: GroupChildren[];
}

type GroupChildren = {
    type: ElementType;
    paragraphType?: ParagraphType,
    content: string;
}
