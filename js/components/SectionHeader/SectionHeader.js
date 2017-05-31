import React from 'react';

import {
  View,
  Text,
} from 'react-native';

const SectionHeader = (sessions) => (
  <View>
    <Text>{sessions.start_time}</Text>
  </View>
);

export default SectionHeader;
