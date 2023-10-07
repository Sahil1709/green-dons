"use client"
import React, { useState } from 'react';
import {
    DesktopOutlined,
    HomeOutlined,
    BookOutlined,
    GiftOutlined,
    IdcardOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
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
    getItem('certificates', '6' , <IdcardOutlined />),
    getItem('volunteer opportunities', '7' , <GiftOutlined />),
    getItem('Browser game', '8', <DesktopOutlined />),
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
                {currentItem == 1 && <> <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Current Expenses"
          value={98231}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowUpOutlined />}
          suffix="$"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Reduced Expenses"
          value={73123}
          precision={2}
          valueStyle={{ color: '#3f8600'}}
          prefix={<ArrowDownOutlined />}
          suffix="$"
        />
      </Card>
    </Col>
  </Row></>}

                //TODO: Add for each navigation is this the same

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by GreenDons
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;