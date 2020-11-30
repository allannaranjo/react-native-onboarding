import React, { memo } from 'react';
import Carousel from './Onboarding



function HomeScreen({ navigation }) {

  return (
    <Carousel navigation={navigation} />
  );

}

export default memo(HomeScreen);

