import ParagraphElement, { ParagraphElementData } from "../elements/paragraph";
import  ImageElement, { ImageElementData } from "../elements/image";
import Component from "../components/component";
import { deepCopy, getRandomValue } from "@/utils/utils";
import { ComponentConfig } from "../index.d";
import { GroupChildren } from "../index.d";


const factoryImage = (id: string, config: any, themeData: any, inheritStyle: any = {}) => {
  const { image = [] } = themeData;
  
  const cardStyle = getRandomValue(image)?.card || {};

  // 继承的css属性
  let inheritCSSProperties = ['borderRadius','borderWidth','borderColor','borderStyle','boxShadow']
  console.log('inheritStyle',inheritStyle);
  
  let inheritStyleData = {}
  if(inheritStyle) {
    inheritStyleData = Object.keys(inheritStyle).reduce((prev: any, key: string) => {
      if(inheritCSSProperties.includes(key)) {
        prev[key] = inheritStyle[key]
      }
      return prev;
    }, {})
  }

  let imageParams: ImageElementData = {
    id: id,
    content: config.content,
    styles: {
      ...cardStyle,
      ...inheritStyleData,
      ...(cardStyle.background || {}),
      ...(cardStyle.border || {})
    }
  }
  return <ImageElement {...imageParams} />;
}

const factoryParagraph = (id: string, config: any, themeData: any, inheritStyle: any = {}) => {
  const { colors, paragraph: {
    title: titleParagraph,
    headline: headlineParagraph,
    subheadline: subheadlineParagraph,
    normalText: normalTextParagraph,
  }, alignment = [], card = {}, background = [] } = themeData;

  // 继承的css属性
  let inheritCSSProperties = ['color']
  let inheritStyleData = {}
  if(inheritStyle) {
    inheritStyleData = Object.keys(inheritStyle).reduce((prev: any, key: string) => {
      if(inheritCSSProperties.includes(key)) {
        prev[key] = inheritStyle[key]
      }
      return prev;
    }, {})
  }
  
  let paragraphParams: ParagraphElementData = {
    ...inheritStyleData,
    id: id,
    content: config.content,
  }
  switch (config.paragraphType) {
    case 'title':
      paragraphParams = {
        ...paragraphParams,
        color: colors.primary,
        alignment: alignment[0],
        ...titleParagraph,
      }
      break;
    case 'headline':
      paragraphParams = {
        ...paragraphParams,
        color: colors.primary,
        ...headlineParagraph,
      }
      break;
    case 'subhealine':
      paragraphParams = {
        ...paragraphParams,
        color: colors.secondary,
        ...subheadlineParagraph,
      }
      break;
    default:
      paragraphParams = {
        ...paragraphParams,
        color: colors.text,
        ...normalTextParagraph,
      }
      break;
  }
  return <ParagraphElement {...paragraphParams} />;
}

const handleGroupRules = (config: ComponentConfig, children: GroupChildren[],themeData: any) => {
  const { card = [] } = themeData;
  const cardStyle = getRandomValue(card);
  console.log('cardStyle',cardStyle);
  
  let componentStyles: any = {
    ...cardStyle,
    ...cardStyle?.border,
    ...cardStyle?.background,
  }
  const componentFilterStyles = deepCopy(componentStyles);

  const hasImageElement = children.some((child: any) => child.type === 'image');
  // 如果有图片元素，那么就不需要设置border, padding
  if(hasImageElement) {
    componentFilterStyles.borderWidth = null;
    componentFilterStyles.borderColor = null;
    componentFilterStyles.borderStyle = null;
    componentFilterStyles.padding = null;
    componentFilterStyles.backgroundColor = null;
    componentFilterStyles.backgroundImage = null;
  } 
  return {
    componentStyles,
    componentFilterStyles,
  };
}

const factoryGroup = (id: string, config: any, themeData: any, componentStyles: any) => {
  console.log('componentStyles',componentStyles);
  const children = config.children;
  return (
    <Component styles={componentStyles.componentFilterStyles}>
      {
        children.map((child: any) => {
          const { type } = child;
          console.log('child',child);
          return matchComponent(type, id, child, themeData, componentStyles.componentStyles);
        })
      }
    </Component>
  )
}

const matchComponent = (componentType: string, id: string, config: any, themeData: any, inheritStyle: any = {}) => {
  switch (componentType) {
    case 'image':
      return factoryImage(id, config, themeData, inheritStyle)
    case "paragraph":
      return  factoryParagraph(id, config, themeData,inheritStyle);
    case 'group':
      const children = config.children;
      if (!children) return null;
      let componentStyles = handleGroupRules(config, children, themeData)
      return factoryGroup(id, config, themeData, componentStyles)
    default:
      return '-'
  }
}

const factory = (node: any, theme: any) => {
    const componentType = node.getComponent();
    const config = node.getConfig();
    const nodeId = `tab-${node._attributes.id}`;
  
    if (!config) return null;

    console.log('config=======',1);

    return matchComponent(componentType, nodeId, config, theme);
  };

  class Generate {
    slides: any[] = [];
    // 主题数据
    themesData: any;
    init(slides: any[], themesData: any) {
      console.log('init');
      this.slides = slides;
      this.themesData = themesData;
    }
    public render() {
      this.slides.forEach((slide: any) => {
        
      });
    }
  }

  export default Generate;