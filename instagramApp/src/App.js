import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
// import post_data from './post_data.json';
import Story from './components/Storyline';
import post_data from './post_data.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Postcard from './components/Posts';
const App = () => {
  const firstIcon = <Icon name="plus-box" size={30} color="black" />;
  const middleIcon = <Icon name="heart-outline" size={30} color="black" />;
  const lastIcon = <Icon name="facebook-messenger" size={30} color="black" />;
  const addStoryIcon = <Icon name="plus-circle" size={28} color="blue" />;
  return (
    <SafeAreaView style={styles.directionEnabled}>
      <View style={styles.navbar}>
        <View>
          <Image style={styles.logo} source={require('./photos/logo.png')} />
        </View>
        <View style={styles.navbarIcons}>
          <View>
            <View>{firstIcon}</View>
          </View>
          <View style={styles.middleIcon}>
            <View>{middleIcon}</View>
          </View>
          <View>
            <View>{lastIcon}</View>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.stories}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Story
                  name="Your story"
                  link="https://picsum.photos/id/237/200/300"
                />
                <Story
                  name="merics"
                  link="https://picsum.photos/id/235/200/300"
                />
                <Story
                  name="ahmetz"
                  link="https://picsum.photos/id/334/200/300"
                />
                <Story
                  name="onurt"
                  link="https://picsum.photos/id/238/200/300"
                />
                <Story
                  name="fatihy"
                  link="https://picsum.photos/id/233/200/300"
                />
                <Story
                  name="selimk"
                  link="https://picsum.photos/id/232/200/300"
                />
                <Story
                  name="cansub"
                  link="https://picsum.photos/id/231/200/300"
                />
                <View style={styles.addStory}>{addStoryIcon}</View>
              </ScrollView>
            </View>
          )}
          data={post_data}
          renderItem={({item}) => <Postcard posts={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: Dimensions.get('window').height / 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  directionEnabled: {
    flex: 1,
  },
  logo: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 17,
    marginLeft: 10,
  },
  navbarIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 10,
  },
  stories: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.3,
  },
  middleIcon: {
    marginHorizontal: 18,
  },
  addStory: {
    position: 'absolute',
    top: 45,
    left: 55,
  },
});
export default App;