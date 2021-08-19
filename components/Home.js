import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import colors from '../assets/colors/colors';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import activitiesData from '../assets/data/activitiesData';
import discoverData from '../assets/data/discoverData';
import discoverCatergoriesData from '../assets/data/discoverCatergoriesData';
import learnMoreData from '../assets/data/learnMoreData';
import profile from '../assets/images/person.png';

export default function Home({navigation}) {
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {item: item})}>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverImageBG}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color="white" />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header  */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color="black"
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover  */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.categoryTitle, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.categoryTitle}>Destinations</Text>
            <Text style={styles.categoryTitle}>Cities</Text>
            <Text style={styles.categoryTitle}>Experiences</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities  */}
        <View style={styles.activitesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemWrapper}>
            <FlatList
              keyExtractor={item => item.id}
              data={activitiesData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.activitiesItem}>
                  <Image source={item.image} />
                  <Text style={styles.activitiesText}>{item.title}</Text>
                </View>
              )}
            />
          </View>
        </View>

        {/* Learn More  */}

        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              keyExtractor={item => item.id}
              data={learnMoreData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <ImageBackground
                  source={item.image}
                  style={styles.learnMoreItem}
                  imageStyle={styles.learnMoreImage}>
                  <Text style={styles.learnMoreItemTitle}>{item.title}</Text>
                </ImageBackground>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // HEADER
  menuWrapper: {
    marginHorizontal: 20,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuIcon: {},
  profileImage: {
    borderRadius: 7,
    height: 52,
    width: 52,
  },
  // Discover
  discoverWrapper: {
    marginVertical: 5,
  },
  discoverTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    marginHorizontal: 20,
  },
  discoverCategoriesWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  categoryTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingTop: 20,
  },
  discoverItem: {
    height: 250,
    width: 170,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverImageBG: {
    borderRadius: 20,
    // height: 250,
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    color: 'white',
    fontSize: 18,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    color: 'white',
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  // Activities
  activitesWrapper: {
    marginTop: 20,
  },
  activitiesTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    marginHorizontal: 20,
  },
  activitiesItemWrapper: {
    marginTop: 15,
  },
  activitiesItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  activitiesText: {
    fontFamily: 'Lato-Bold',
    color: colors.gray,
    marginTop: 5,
    fontSize: 14,
  },
  // learno more
  learnMoreWrapper: {
    marginTop: 20,
  },
  learnMoreTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    marginHorizontal: 20,
    color: 'black',
  },
  learnMoreItemsWrapper: {},
  learnMoreItem: {
    height: 180,
    width: 170,
    marginLeft: 20,
    marginTop: 15,
    justifyContent: 'flex-end',
    padding: 10,
  },
  learnMoreImage: {
    borderRadius: 20,
  },
  learnMoreItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: 'white',
  },
});
