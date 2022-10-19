import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Main from './src/navigations/Main';
import { ServicesContextProvider } from './src/services/ServicesContext';
import mobileAds, { MaxAdContentRating } from 'react-native-google-mobile-ads';

mobileAds()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,

    // An array of test device IDs to allow.
    testDeviceIdentifiers: ['EMULATOR', '27e33b109c1c7ece'],
  })
  .then(() => {
    // Request config successfully set!
  });

  mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
    console.log(adapterStatuses)
  });

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ServicesContextProvider>
      <SafeAreaView style={(backgroundStyle, styles.mainApp)}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Main />
      </SafeAreaView>
    </ServicesContextProvider>
  );
};

const styles = StyleSheet.create({
  mainApp: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
