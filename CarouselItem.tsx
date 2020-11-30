import React, { memo } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import { Button } from 'react-native-paper';

interface CarouselItemProps {
  item: any,
  navigation: any
}

function CarouselItem({ item, navigation }: CarouselItemProps) {

  const { width, height } = Dimensions.get('window');

  const navigateTo = (target: string) => {
    navigation.navigate(target)
  }

  return (
    <View style={{ width, height }}>
      <Image source={item.url} style={styles.imageStyle} />
      <View style={styles.wrapper}>
        <Text style={[styles.header, styles.textShadow]}>{item.title}</Text>
        <Text style={[styles.paragraph, styles.textShadow]}>{item.description}</Text>
        {
          item.options &&
          (
            <>
              {item.options.map((itemOption: any, index: number) => (
                <View style={styles.itemOptionWrapper} key={index}>
                  {
                    itemOption.type === 'button' && (
                      <Button
                        style={styles.itemOptionButton}
                        labelStyle={styles.itemOptionButtonText}
                        color='#fff'
                        uppercase={false}
                        onPress={() => {
                          navigateTo(itemOption.target);
                        }}>
                        {itemOption.text}
                      </Button>
                    )
                  }
                </View>
              ))}
            </>
          )
        }
      </View>
    </View>
  )
}

export default memo(CarouselItem);

const styles = StyleSheet.create({
  itemOptionWrapper: {
    ...Platform.select({
      ios: {
        marginBottom: 50
      }
    }),
    flex: 1,
    width: '100%',
    padding: 10
  },
  itemOptionButton: {
    borderRadius: 50,
    backgroundColor: '#ff9a00',
    width: '100%'
  },
  itemOptionButtonText: {
    backgroundColor: '#ff9a00',
    fontSize: 20,
    color: '#fff',
    width: '100%'
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  paragraph: {
    color: '#fff',
    fontSize: 17,
  },
});

