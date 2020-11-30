import React, { useState, memo } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, Dimensions, Platform } from 'react-native';
import CarouselItem from './CarouselItem'
import { carouselConfiguration } from './carouselConfig';
import { ScrollView } from 'react-native-gesture-handler';

interface CarouselProps {
  navigation: any
}

function Carousel({ navigation }: CarouselProps) {

  const [data, setData] = useState(carouselConfiguration)
  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
        >

          {
            data.map((item, index) => {
              return <CarouselItem item={item} key={index} navigation={navigation} />
            })
          }
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {data.map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
      </View>
    </SafeAreaView>


  );

}

export default memo(Carousel)

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    ...Platform.select({
      ios: {
        marginTop: -44
      }
    })

  },
  carouselContainer: {
    height
  },
  paginationWrapper: {
    ...Platform.select({
      ios: {
        bottom: 40,
      },
      default: {
        bottom: 10,
      }
    }),
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
});


