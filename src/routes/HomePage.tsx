import { Space, Typography } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
const { Title, Text } = Typography;

const HomePage = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Typography>
      <Title level={2}>React Demo App</Title>

      <Paragraph>Job interview home assignment for Web Developer position.</Paragraph>

      <Title level={4}>Key Features/Technologies To Demonstrate:</Title>
      <Space direction="vertical">
        <Text>• React Router for navigation and route parameter management</Text>
        <Text>• React Hooks (e.g., useState, useEffect, useContext) and/or possible integration with RxJS for asynchronous data processing</Text>
        <Text>• Scoped state - using the Context API or custom hooks for localized state management within specific components or routes</Text>
        <Text>• Docker for containerizing the application</Text>
        <Text>• Hosting (optional, e.g., Netlify, Vercel, Firebase, GitHub Pages)</Text>
      </Space>

      <h2>Mock login</h2>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </Typography>
  );
};

export default HomePage;
