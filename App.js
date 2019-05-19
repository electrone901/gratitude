/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, TextInput, Image, ScrollView} from 'react-native';

// import FooterTabs from './components/FooterTabs';

// Showing Recent Messages
// :-1: /Users/Mac/Desxktop/gratitude/node_modules/native-base/Fonts/FontAwesome5_Regular.ttf: No such file or directory


import PostScreen from './components/Post';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.contentContainer}>
      
    
      <View style={styles.container}>
        
        <View style={styles.card}>
          <View style={{flexDirection:"row"}}>
                <Image source={require('./img/1.png')} style={{height: 200, width: 40, flex: 1}}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row"}}>
                <Image source={require('./img/2.png')} style={{height: 200, width: 40, flex: 1}}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row"}}>
                <Image source={require('./img/3.png')} style={{height: 200, width: 40, flex: 1}}/>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection:"row"}}>
                <Image source={require('./img/4.png')} style={{height: 200, width: 40, flex: 1}}/>
          </View>
        </View>
      




        <PostScreen/>
        <View style={styles.card}>
            <View style={styles.wrapper}>
                <View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:3}}>
                          <Text>Reputation for Benton C Bainbridge eth.png </Text>
                        </View>
                        <View style={{flex:1}}>
                          <Image source={require('./img/eth.png')} style={{height: 20, width: 20, flex: 1}}/><Text>3.3</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.wrapper}>
                <View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:3}}>
                          <Image source={require('./img/profile.jpg')} style={{height: 50, width: 50, flex: 1}}/><Text>Luis Car</Text>
                        </View>
                        <View style={{flex:3}}>
                          <Image source={require('./img/eth.png')} style={{height: 20, width: 20, flex: 1}}/><Text>3.3</Text>
                        </View>
                        
                        <View style={{flex:3}}>
                          <Text>Reputation for Benton C Bainbridge eth.png </Text>
                        </View>
                    </View>
                </View>
            </View>


              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />

              <View style={{flexDirection:"row", backgroundColor: 'pink'}}>
                  {/* first div */}
                  <View style={{flex:1, flexDirection:"row",}}>
                    <View style={{flex:1, flexDirection:"column", height: 30, }}>
                      <Text>Like icon </Text>
                    </View>
                    <View style={{flex:1, flexDirection:"column", height: 30, }}>
                      <View style={{flex:1, flexDirection:"column", backgroundColor: 'brown', height: 30,}}>
                        <Text> like % face</Text>
                      </View>
                      <View style={{flex:1, flexDirection:"column", backgroundColor: 'yellow', height: 30,}}>
                        <Text> Dislike % face</Text>
                      </View>
                    </View>
                  </View>

                  {/* Second div */}
                  <View style={{flex:1, backgroundColor: 'orange'}}>
                    <View style={{flex:1, flexDirection:"row",}}>
                      <View style={{flex:1, flexDirection:"column", height: 30, }}>
                        <Text>Like icon </Text>
                      </View>
                      <View style={{flex:1, flexDirection:"column", height: 30, }}>
                        <View style={{flex:1, flexDirection:"column", backgroundColor: 'brown', height: 30,}}>
                          <Text> like % face</Text>
                        </View>
                        <View style={{flex:1, flexDirection:"column", backgroundColor: 'yellow', height: 30,}}>
                          <Text> Dislike % face</Text>
                        </View>
                      </View>
                    </View>
                  </View>
              </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}
const width = '90%';
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
  contentContainer: {
    paddingVertical: 80
  },
  title: {
    fontSize: 20,
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1, 
    backgroundColor: '#e1eaf2',
  },
  card: {
    // borderWidth: 3,
    // borderRadius: 3,
    borderColor: '#000',
    width,
    padding: 10
  },
  cardImage: {
    height: 260,
  },
  textLeft: {
    position: 'absolute',
    left:0,
    top:0
  },
  textRight: {
    position: 'absolute',
    right: 0,
    top: 0
  }

});
