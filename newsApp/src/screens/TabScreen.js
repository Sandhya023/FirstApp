import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#009387'}} hasTabs>
        <Left/>
          <Body>
            <Title>News App</Title>
          </Body>
          <Right />
         </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor: '#009387'}} 
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: 'white'}}
          activeTextStyle={{color: 'white'}}
          heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} 
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: 'white'}}
          activeTextStyle={{color: 'white'}}
          heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} 
          activeTabStyle={{backgroundColor: '#009387'}}
          textStyle={{color: 'white'}}
          activeTextStyle={{color: 'white'}}
           heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
