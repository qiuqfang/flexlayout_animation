import { CSSProperties } from "react";

// 图片元素数据
export type ImageElementData = {
  content: string;
  id?: string;
  mask?: string;
  styles?: CSSProperties;
};

const ImageElement = (props: ImageElementData) => {
  const { id, content, mask, styles } = props;

  return (
    <div
      data-id={id}
      className="ele-image w-full h-full"
      style={{
        clipPath: mask,
        overflow: "hidden",
        ...styles,
      }}
    >
      <img
        src={content}
        style={{ maskImage: `url("#circleMask${id}")` }}
        className="w-full h-full object-cover"
      />
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ position: "absolute", top: 0, left: 0, zIndex: -999 }}
      >
        <defs>
          <filter id="displacementFilter5">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.1"
              numOctaves="3"
              result="noise"
            ></feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="150"
              xChannelSelector="R"
              yChannelSelector="G"
            ></feDisplacementMap>
          </filter>
          <mask id={`circleMask${id}`}>
            <circle
              cx="50%"
              cy="50%"
              r="1500"
              fill="white"
              style={{ filter: "url(#displacementFilter5)" }}
            ></circle>
          </mask>
        </defs>
      </svg>
    </div>
  );
};

export default ImageElement;
