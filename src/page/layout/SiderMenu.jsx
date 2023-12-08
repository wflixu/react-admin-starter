import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, DashboardOutlined, DashboardFilled, SettingFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Dashboard', 'dashboard', <DashboardOutlined />,),
    getItem('组件资源', 'componentss', <AppstoreOutlined />, [
        getItem('http', 'http'),
        getItem('Option 6', '6'),
        getItem('网络', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('系统管理', 'system', <SettingOutlined />, [
        getItem('用户管理', 'system-user'),
        getItem('权限管理', 'system-auth'),
        getItem('菜单管理', 'meun-auth'),
    ]),

];


export default function SiderMenu() {
    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(['dashboard'])
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const navigate = useNavigate();
    const onSelect = ({ item, key, selectedKeys }) => {
        console.log(item, key, selectedKeys)
        navigate(`/${key}`);
        setSelectedKeys(selectedKeys)
    }

    useEffect(() => {
        navigate(`/dashboard`)
    }, []);

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            onOpenChange={onOpenChange}
            onSelect={onSelect}
            style={{
                height: '100%'
            }}
            items={items}
        />
    )


}