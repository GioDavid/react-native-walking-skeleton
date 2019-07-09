
import React from 'react';
import {ScrollView, View} from 'react-native';
import { Container, Header, Footer, FooterTab, Button, Text, Icon } from 'native-base';

const App = () => {
  return (
    <Container>
      <ScrollView>
        <Header />
        <View>
          <Text>Main</Text>
        </View>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Pagar</Text>
            </Button>
            <Button>
              <Text>Cobrar</Text>
            </Button>
          </FooterTab>
        </Footer>

      </ScrollView>
    </Container>
  );
};



export default App;