import { ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import { Card, Col, Row, Statistic ,Steps, Table} from 'antd';

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

const Dashboard = () => {
    return (
        <>
            <div className=' mx-4 my-10 font-bold text-2xl'>Current USF Expenses</div>
            <Row gutter={16}>

                <Col span={12}>
                    <Card bordered={false}>
                        <Statistic
                            title="Current USF Expenses per person"
                            value={57.52}
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
                            title="Diversion rate for 2023 QR3"
                            value={53}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
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
                columns={columns}
                dataSource={data}
            />

        </>
    );
}

export default Dashboard;