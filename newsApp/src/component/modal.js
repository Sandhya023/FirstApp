import { Form } from 'native-base';
import React, {Component} from 'react';
import { WebView } from 'react-native-webview'
import { Dimensions, View, Modal, Share } from 'react-native';
import { Container, Header, Content, Body, Left,Icon, Right, Title, Button } from 'native-base';

class ModalComponent extends Component {
    constructor(props){
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }
    handleShare = () => {
        const {url, title} = this.props.articleData;
        // message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
        // return Share.share(
        //     {title, message, url: message},
        //     {dialogTitle:`Share ${title}`}
        // );
    }
    
    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        
        return (
           <Modal
           animationType="slide"
           transparent
           visible={showModal}
           onRequestClose={this.handleClose}
           >
               <Container style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
                   <Header style={{backgroundColor: '#009387'}}>
                       <Left>
                       <Button onPress={this.handleClose} transparent>
                            <Icon name="close" style={{color: 'white', fontSize: 12}}/>
                        </Button>
                       </Left>
                       <Body>
                       <Title children={articleData.title} style={{color: 'white'}}/>   
                       </Body>
                       <Right>
                       <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                       </Right>
                   </Header>
                   <Content>
                   <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                   </Content>
               </Container>

           </Modal>
        );
    }
}

export default ModalComponent;