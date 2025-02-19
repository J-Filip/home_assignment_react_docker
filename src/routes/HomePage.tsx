import { Space, Typography } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';

const HomePage = () => {
  const { Title, Text } = Typography;

  return (
    <Typography>
      <Title level={2} style={{ textAlign: 'center' }}>
        React Demo App
      </Title>

      <Paragraph>Job interview home assignment for Web Developer position.</Paragraph>

      <Title level={4}>Key Features/Technologies Demonstrated:</Title>
      <Space direction="vertical">
        <Text>• React Router for navigation and route parameter management</Text>
        <Text>• React Hooks (e.g., useState, useEffect, useContext) and/or possible integration with RxJS for asynchronous data processing</Text>
        <Text>• Scoped state - using the Context API or custom hooks for localized state management within specific components or routes</Text>
        <Text>• Docker for containerizing the application</Text>
        <Text>• Hosting (optional, e.g., Netlify, Vercel, Firebase, GitHub Pages)</Text>
      </Space>
    </Typography>
  );
};

export default HomePage;
