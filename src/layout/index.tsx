import React from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

import { Layout } from "antd";

interface layoutpops {
  children: React.ReactNode;
}
export const Index = ({ children }: layoutpops) => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default Index;
