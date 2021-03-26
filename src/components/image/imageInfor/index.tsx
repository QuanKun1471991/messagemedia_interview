import React from "react";
import { Image } from "antd";

interface imageInfoProps {
  url: string;
  title: string;
  className?: string;
}
const Index = ({ url, title, className = "" }: imageInfoProps) => {
  return (
    <div className="image-info">
      <Image src={url} alt={title} />
      <div className={className}>{title}</div>
    </div>
  );
};

export default React.memo(Index);
