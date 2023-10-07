"use client"
import React, { useState } from 'react';
import {
    DesktopOutlined,
    HomeOutlined,
    FileOutlined,
    BookOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Home', '1' , <HomeOutlined />),
    getItem('Courses', 'sub1', <BookOutlined />, [
        getItem('Module 1', '3'),
        getItem('Module 2', '4'),
        getItem('Module 3', '5'),
    ]),
    getItem('Certificates', '6' , <PieChartOutlined />),
    getItem('volunteer opportunities', '7' , <PieChartOutlined />),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Browser game', '9', <DesktopOutlined />),
];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentItem, setCurrentItem] = useState("1")
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" onClick={(e) => setCurrentItem(e.key)} defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>

            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                {currentItem == 1 && <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>}

                //TODO: Add for each navigation

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;