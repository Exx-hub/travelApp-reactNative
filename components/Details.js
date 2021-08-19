import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {auto} from 'async';

const height = Dimensions.get('window').height;

export default function Details({navigation, route}) {
  // console.log(route.params.item.title);
  const {item} = route.params;
  console.log(route.params.item.imageBig);
  return (
    <View style={styles.detailsContainer}>
      {/* IMAGE BG  */}
      <ImageBackground
        source={item.imageBig}
        style={styles.detailsBackgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color="white" />
        </TouchableOpacity>
        <View style={styles.detailsHeaderWrapper}>
          <Text style={styles.detailsHeaderTitle}>{item.title}</Text>
          <View style={styles.detailsLocationWrapper}>
            <Entypo name="location-pin" size={24} color="white" />
            <Text style={styles.detailsLocation}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>

      {/* DESCRIPTION SECTION  */}
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.orange} />
        </View>

        <View style={styles.descriptionTitleWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <View style={{height: 90}}>
            <ScrollView>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </ScrollView>
          </View>
        </View>

        <View style={styles.descriptionDetailsWrapper}>
          <View style={styles.descriptionDetailsItem}>
            <Text style={styles.descriptionDetailsItemTitle}>PRICE</Text>
            <Text style={styles.descriptionDetailsItemSubitle}>
              ${item.price}
              <Text style={styles.descriptionDetailsItemExtra}>/person</Text>
            </Text>
          </View>
          <View style={styles.descriptionDetailsItem}>
            <Text style={styles.descriptionDetailsItemTitle}>RATING</Text>
            <Text style={styles.descriptionDetailsItemSubitle}>
              {item.rating}
              <Text style={styles.descriptionDetailsItemExtra}>/5</Text>
            </Text>
          </View>
          <View style={styles.descriptionDetailsItem}>
            <Text style={styles.descriptionDetailsItemTitle}>DURATION</Text>
            <Text style={styles.descriptionDetailsItemSubitle}>
              {item.duration}
              <Text style={styles.descriptionDetailsItemExtra}> hours</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.bookNowWrapper}
          onPress={() => alert('You Booked a Trip. See you!')}>
          <Text style={styles.bookNow}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
  },
  detailsBackgroundImage: {
    height: height * 0.6,
    // width: 100%
  },
  backIcon: {
    marginTop: 20,
    marginLeft: 5,
  },
  detailsHeaderWrapper: {
    position: 'absolute',
    bottom: 50,
    // left: 20,
  },
  detailsHeaderTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    marginHorizontal: 20,
    color: 'white',
  },
  detailsLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  detailsLocation: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginLeft: 5,
    // marginVertical: 10,
    color: 'white',
  },
  descriptionWrapper: {
    // height: height * 0.4,
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    borderRadius: 64,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  descriptionTitleWrapper: {
    // paddingHorizontal: 20,
    padding: 20,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 28,
    marginVertical: 10,
  },
  descriptionText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
    marginVertical: 5,
  },
  descriptionDetailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5,
  },
  descriptionDetailsItem: {},
  descriptionDetailsItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
    // marginVertical: 10,
  },
  descriptionDetailsItemSubitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: colors.orange,
    marginTop: 5,
  },
  descriptionDetailsItemExtra: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  bookNowWrapper: {
    backgroundColor: colors.orange,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  bookNow: {
    color: colors.white,
    // textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
});
