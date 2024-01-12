import { CSSProperties } from "react";

type IProps = {
  children: React.ReactNode;
  styles?: CSSProperties;
}

const Index = (props: IProps) => {
  const { children, styles = {} } = props;
    return <div className="group flex gap-3 flex-col h-full" style={styles}>
      {children}
    </div>;
  };

  export default Index;