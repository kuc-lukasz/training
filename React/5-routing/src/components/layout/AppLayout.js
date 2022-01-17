import { Layout } from "antd";

const { Content, Sider } = Layout;

export const AppLayout = ({ sidebar, header, children }) => (
  <Layout style={{ height: "100vh" }}>
    <Sider collapsible defaultCollapsed width={120}>
      {sidebar}
    </Sider>
    <Layout>
      {header}
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          overflow: "auto",
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
);
