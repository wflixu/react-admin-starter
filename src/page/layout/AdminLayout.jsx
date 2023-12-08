import { Layout, Menu, Popconfirm } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'

import SiderMenu from './SiderMenu.jsx';
import { Outlet } from 'react-router-dom';


const { Header, Footer, Sider, Content } = Layout;



const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  color: '#fff',
  backgroundColor: '#108ee9',
  maxHeight:"100%",
  overflow: "auto"
};

const siderStyle = {
  textAlign: 'left',
  width: "320px",
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '32px',
  backgroundColor: '#7dbcea',
};
const layoutStyle = {
    height: '100vh'
}

export const AdminLayout = () => {
   
    return (
    <Layout style={layoutStyle} >
      <Header style={headerStyle}>Header</Header>
      <Layout hasSider>
        <Sider style={siderStyle} width={280}><SiderMenu/></Sider>
        <Content style={contentStyle}><Outlet/></Content>
      </Layout>
      <Footer style={footerStyle} >Footer</Footer>
    </Layout>
    )
}
export default AdminLayout