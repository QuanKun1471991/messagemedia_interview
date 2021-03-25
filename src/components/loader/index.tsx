import { Spin } from "antd";
import React from "react";

export interface LoaderProps {
  classCustom?: string;
  size?: "default" | "small" | "large";
}

const Index = ({ classCustom = null, size = "default" }: LoaderProps) => {
  return (
    <div className={`loader-container ${classCustom}`}>
      <Spin size={size} />
    </div>
  );
};

export default React.memo(Index);
