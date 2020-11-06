import React, { Component } from 'react';
import { Container,Button, Thumbnail, Text, Header, Content, List, ListItem,Left, Right, Body } from 'native-base';

import { getArticles } from '../../service/news'
import { Alert, ActivityIndicator, View } from 'react-native';
import {DataItem} from '../../component/dataItem';
import TimeAgo from '../../component/time'
import Modal from '../../component/modal';

export default class Tab3 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}

    }
  }

 


  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getArticles('technology').then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
      // console.log("mount" +JSON.stringify(this.state.data))
    }, error => {
      Alert.alert('Error', 'Something went wrong')
    })
  }
  handlePress = () => {
    const {url, title} = this.data;
    this.props.onPress({url, title});
  }

  render() {
    // console.log("render" +JSON.stringify(this.state.data));

    // let view = this.state.isLoading ? (
    //   <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
    //     <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
    //     <Text style={{marginTop: 10}}>Please Wait...</Text>
    //   </View>
    // ) : (
      
    // )

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
        <Button transparent onPress={this.handlePress}>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
            )
          }} />
        </Content>

        <Modal 
        showModal={this.state.setModalVisible}
        articleData={this.state.modalArticleData}
        onClose={this.handleModalClose} />
      </Container>
    );
  }
}
