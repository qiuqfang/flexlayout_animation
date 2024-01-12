import { CardStyle, ParagraphType } from ".";
import { AlignmentStyle } from "../themes/index.d";

export type ParagraphElementData = {
  paragraphType?: ParagraphType;
  id?: string;
  content: string;
  fontSize?: number | string;
  color?: string;
  textAlign?: "left" | "center" | "right";
  lineHeight?: number | string;
  wordSpacing?: number | string;
  textShadow?: string;
  card?: CardStyle;
  alignment?: AlignmentStyle;
};

const ParagraphElement = (props: ParagraphElementData) => {
  const { id, content, card = {}, alignment, color, ...style } = props;

  const colorStyle = color?.includes("linear")
    ? {
        background: color,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {
        color,
      };

  const flexStyle = alignment
    ? {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: alignment.horizontal,
        alignItems: alignment.vertical,
      }
    : {};

  const cardStyle = {
    backgroundColor: card.background?.backgroundColor,
    boxShadow: card.boxShadow,
    padding: card.padding,
    margin: card.margin,
    borderRadius: card.borderRadius,
    ...card.border,
  };

  return (
    <div className="ele-paragraph" style={flexStyle}>
      <p
        data-id={id}
        className="paragraph-content"
        style={{
          ...style,
          ...colorStyle,
          ...cardStyle,
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default ParagraphElement;
