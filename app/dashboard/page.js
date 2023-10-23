"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import {
    DesktopOutlined,
    HomeOutlined,
    BookOutlined,
    GiftOutlined,
    IdcardOutlined,
    UserOutlined, 
    BellOutlined 
} from '@ant-design/icons';
import {  Layout, Menu, theme, Avatar, Badge, Button, Col, Row } from 'antd';
import Dashboard from '../components/Dashboard';
import Module1 from '../components/Module1';
import Module2 from '../components/Module2';
import Module3 from '../components/Module3';
import Module4 from '../components/Module4';
import Module5 from '../components/Module5';
import Module6 from '../components/Module6';

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
    getItem('Home', '1', <HomeOutlined />),
    getItem('Courses', 'sub1', <BookOutlined />, [
        getItem('Module 1', '3'),
        getItem('Module 2', '4'),
        getItem('Module 3', '5'),
        getItem('Module 4', '6'),
        getItem('Module 5', '7'),
        getItem('Module 6', '8'),
    ]),
    getItem('certificates', '9', <IdcardOutlined />),
    getItem('volunteer opportunities', '10', <GiftOutlined />),
    getItem('Browser game', '11', <DesktopOutlined />),
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

            <Layout >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className='float-left'>
                    <Row>
                            <Col>
                            <Image
        src="/USF_LOGO.svg" // Path to your SVG file inside the public directory
        alt="Example SVG"
        width={250} // Specify the width of the SVG
        height={250} // Specify the height of the SVG
      />
                            </Col>
                            <Col><h6 className='px-4 font-bold'>GREEN DONS</h6></Col>
                           
                        </Row>
                    </div>
                    <div className='float-right px-6' >
                        <Row>
                            <Col><Badge count={1}>
                                <Button shape="round" icon={<BellOutlined />} />
                            </Badge></Col>
                            <Col><h6 className='px-4 font-bold'>User</h6></Col>
                            <Col><Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                }}
                                icon={<UserOutlined />}
                            /></Col>
                        </Row>

                    </div>
                </Header>

                {currentItem == 1 && <Dashboard />}
                {currentItem == 3 && <Module1 />}
                {currentItem == 4 && <Module2 />}
                {currentItem == 5 && <Module3 />}
                {currentItem == 6 && <Module4 />}
                {currentItem == 7 && <Module5 />}
                {currentItem == 8 && <Module6 />}


                <Footer
                    style={{
                        backgroundColor: 'white',
                        textAlign: 'center',
                    }}
                >
                    Green-Dons ©2023 Created by Sahil, Deven, Alexia
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;