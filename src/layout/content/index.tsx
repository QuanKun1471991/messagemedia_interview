import React from "react";
import { Layout } from "antd";

interface contentProps {
  className?: string;
  children: React.ReactNode;
}
const Index = ({ className = "", children }: contentProps) => {
  return (
    <Layout.Content className={className}>
      <div>{children}</div>
    </Layout.Content>
  );
};

export default React.memo(Index);
