import React, { Component } from 'react';
import { Container,Button, Thumbnail, Text, Header, Content, List, ListItem,Left, Right, Body } from 'native-base';

import { getArticles } from '../../service/news'
import { Alert, ActivityIndicator, View } from 'react-native';
import {DataItem} from '../../component/dataItem';
import TimeAgo from '../../component/time'
export default class Tab1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null

    }
  }
  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
      // console.log("mount" +JSON.stringify(this.state.data))
    }, error => {
      Alert.alert('Error', 'Something went wrong')
    })
  }

  render() {
    // console.log("render" +JSON.stringify(this.state.data));

    // let view = this.state.isLoading ? (
    //   <View>
    //     <ActivityIndicator animating={this.state.isLoading} />
    //     <Text style={{marginTop: 10}}>Please Wait...</Text>
    //   </View>
    // ) : ()
    return (
      <Container> 
        <Content>
          <List dataArray={this.state.data}
          renderRow={(item) => {
            return (
              <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: item.urlToImage != null ? item.urlToImage : 'https://image.shutterstock.com/image-vector/breaking-news-live-on-world-260nw-589076237.jpg' }} />
      </Left>
      <Body>
        <Text numberOfLines={2}>{item.title}</Text>
        <Text note numberOfLines={2}>{item.description}</Text>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
            <Text note>{item.source.name}</Text>
            <TimeAgo time={item.publishedAt}/>
        </View>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
            )
          }} />
           
         
        </Content>
      </Container>
    );
  }
}
