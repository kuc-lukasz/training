import {
  ContactsFilled,
  UserOutlined,
  VideoCameraFilled,
} from "@ant-design/icons";
import { Menu } from "antd";

export const AppMenu = ({ selectedItem, onItemSelect }) => (
  <Menu
    mode="inline"
    theme="dark"
    selectedKeys={[selectedItem]}
    onSelect={(info) => onItemSelect(info.key)}
    style={{ height: "100%", borderRight: 0 }}
  >
    <Menu.Item key="movies" icon={<VideoCameraFilled />}>
      Movies
    </Menu.Item>
    <Menu.Item key="people" icon={<UserOutlined />}>
      People
    </Menu.Item>
    <Menu.Item key="about" icon={<ContactsFilled />}>
      About
    </Menu.Item>
  </Menu>
);
