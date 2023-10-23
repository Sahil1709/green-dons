import React from 'react';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

const Certificate = () => {

  const certificateData = [
    {
      title: 'Sustainable Computing',
      description: 'CS-411 | Fall 2023',
      color: '#FFC1A1'
    },
    {
      title: 'Green Energy Solutions',
      description: 'ES-301 | Fall 2023',
      color: '#D9E8F5'
    },
    {
      title: 'Eco-friendly Software Development',
      description: 'CS-601-01 | Fall 2023',
      color: '#FFC1A1'
    },
    {
      title: 'Discrete Mathematics',
      description: 'MATH 201 & 501 2023F | Fall 2023',
      color: '#D9E8F5'
    },
    {
      title: 'Compilers',
      description: 'CS-414 | Fall 2023',
      color: '#FFC1A1'
    },
    {
      title: 'Principles of Software Development',
      description: 'CS-602-01 | Fall 2023',
      color: '#FFC1A1'
    }
  ];

  return (
    <div className='pd-1'>
      <Row gutter={16}>
        {certificateData.map((data, index) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              style={{
                width: 240,
                backgroundColor: data.color,
                borderRadius: '15px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px'
              }}
              cover={<img alt="certificate" src="https://placeimg.com/240/160/nature" />}
            >
              <Meta title={data.title} description={data.description} />
            </Card>
          </Col>
        ))}
      </Row>
      <footer style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#888' }}>
        
      </footer>
    </div>
  );
};

export default Certificate;
