import { Card, Image, Typography, Layout, Progress, Statistic } from 'antd';

const { Title, Paragraph } = Typography;
const { Content, Sider } = Layout;

// Module 1 details (integrated directly for simplicity)
const module1 = {
  title: "Intro to Sustainibility",
  introduction: "Course Introduction",
  subtopics: [
    "What is Sustainability?",
    "Historical Overview of Sustainability",
    "The Three Pillars: Economic, Environmental, and Social",
    "Global Initiatives and Treaties",
    "The Role of Individuals in Sustainability",
    "Case Study: Sustainable Practices in Modern Cities"
  ]
};

const Module1 = () => {
  // Example values - you can replace these with actual values
  const courseCompletion = 65; // In percent
  const percentileCompleted = 80; // In percent

  return (
    <Layout style={{ padding: '24px', backgroundColor: '#fff' }}>
      {/* Main content area */}
      <Content style={{ padding: '24px', marginRight: '24px' }}>
        <Image
          width="100%"
          height="80%"
          src="./create-videos-online-courses-cover-coursifyme.jpg"
          alt="Course Content for Module 1"
          style={{ borderRadius: '10px', boxShadow: '0 3px 6px rgba(0,0,0,0.1)', margin: '0 auto' }}
        />
        <div className='text-bold text-lg'>Current course progress</div>
        <Progress
          style={{ marginTop: '20px' }}

          percent={courseCompletion}
          status="active"
        />
        <Paragraph style={{ marginTop: '10px' }}>
          <div className='flex'>


            <Progress type="circle" percent={percentileCompleted} />

            <div className='px-6  text-lg mt-10'>Percentage of Users who have completed this module</div>
          </div>
          {/* <Statistic title="Percentage of Users who Have completed this module" value={percentileCompleted} /> */}

          {/* {percentileCompleted}% of people have completed this course. */}
        </Paragraph>
      </Content>

      {/* Sidebar area */}
      <Sider width={320} style={{ backgroundColor: '#f5f5f5', padding: '24px' }}>
        <Card bordered={false} style={{ backgroundColor: '#f5f5f5' }}>
          <Title level={2}>{module1.title}</Title>
          <Paragraph><strong>{module1.introduction}</strong></Paragraph>
          <Title level={4}>Subtopics:</Title>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {module1.subtopics.map((topic, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>{topic}</li>
            ))}
          </ul>
        </Card>
      </Sider>
    </Layout>
  );
}

export default Module1;