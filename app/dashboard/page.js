"use client"
import React, { useState } from 'react';
import {
    DesktopOutlined,
    HomeOutlined,
    BookOutlined,
    GiftOutlined,
    IdcardOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Steps, Divider, Radio, Table, Avatar, Badge, Button } from 'antd';

import { ArrowDownOutlined, ArrowUpOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
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
    getItem('Home', '1', <HomeOutlined />),
    getItem('Courses', 'sub1', <BookOutlined />, [
        getItem('Module 1', '3'),
        getItem('Module 2', '4'),
        getItem('Module 3', '5'),
    ]),
    getItem('certificates', '6', <IdcardOutlined />),
    getItem('volunteer opportunities', '7', <GiftOutlined />),
    getItem('Browser game', '8', <DesktopOutlined />),
];

const columns = [
    {
        title: "Rankings",
        dataIndex: 'key'
    },

    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Score',
        dataIndex: 'age',
    },
    // {
    //     title: 'Address',
    //     dataIndex: 'address',
    // },
];
const data = [
    {
        key: '1',
        name: 'Alexia Tata',
        age: 99,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Deven Varu',
        age: 32,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Sahil Gupta',
        age: 12,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Puranjai Garg',
        age: 0,
        address: 'Sydney No. 1 Lake Park',
    },
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
                {currentItem == 1 && <>
                    <div className=' mx-4 my-10 font-bold text-2xl'>Current USF Expenses</div>
                    <Row gutter={16}>

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
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="$"
                                />
                            </Card>
                        </Col>
                    </Row>
                    <div className='mx-4 my-10 font-bold text-2xl'>Current course progress</div>
                    <Steps
                        current={1}
                        items={[
                            {
                                title: 'Finished',
                                description: "Module 1",
                            },
                            {
                                title: 'In Progress',
                                description: "Module 2",
                                subTitle: 'Left 00:00:08',
                            },
                            {
                                title: 'Waiting',
                                description: "Module 3",
                            },
                        ]}
                    />

                    <div className='mx-4 my-10 font-bold text-2xl'>Leaderboards</div>
                    <Table
                        // rowSelection={{
                        //     type: selectionType,
                        //     ...rowSelection,
                        // }}
                        columns={columns}
                        dataSource={data}
                    />

                </>}

                {/* //TODO: Add for each navigation is this the same */}

                <Footer
                    style={{
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