import { Layout, Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const { Content } = Layout;

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/',
  },
  {
    label: 'Pokedex',
    key: 'pokemons',
  },
];

export default function MainLayout() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState('mail');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <>
      <Layout>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Content style={{ padding: '36px' }}>
          {/* render current child route element */}
          <Outlet />
        </Content>
      </Layout>
    </>
  );
}
