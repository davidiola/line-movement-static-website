import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import DateInfo from './date-info'
import MyResponsiveLine from './nivo-line';
const { Header, Content, Footer } = Layout;

function App() {
  var supportedSports = ['NBA', 'NFL']
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
          { supportedSports.map(function(name, idx) {
            return <Menu.Item key={idx}>{name}</Menu.Item>
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0px 30px' }}>
        <DateInfo />
        <div className="site-layout-content">
          <div className="graph-box">
            <MyResponsiveLine
              gameEventTitle="test"
              lineType="Spread Odds"
            />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>https://github.com/davidiola</Footer>
    </Layout>
  );
}

export default hot(module)(App);
