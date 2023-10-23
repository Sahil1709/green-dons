import { Layout, Row, Col, Badge, Button, Avatar } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const colorBgContainer = '#1890ff'; // Replace this with your desired background color

const CustomHeader = () => {
  return (
    <Header
      style={{
        padding: '0',
        background: colorBgContainer,
      }}
    >
      <div className='container'>
        <Row justify='space-between' align='middle'>
          {/* Left side: Logo and Website Name */}
          <Col>
            <div className='logo'>
              <img src='path/to/your/logo.png' alt='Logo' style={{ width: '40px', marginRight: '10px' }} />
              <span style={{ color: 'white', fontWeight: 'bold' }}>Website Name</span>
            </div>
          </Col>

          {/* Right side: User Information */}
          <Col>
            <Row align='middle'>
              <Col>
                <Badge count={1}>
                  <Button shape='round' icon={<BellOutlined />} />
                </Badge>
              </Col>
              <Col>
                <h6 className='px-4 font-bold'>User</h6>
              </Col>
              <Col>
                <Avatar
                  style={{
                    backgroundColor: '#87d068',
                  }}
                  icon={<UserOutlined />}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Header>
  );
};

export default CustomHeader;
