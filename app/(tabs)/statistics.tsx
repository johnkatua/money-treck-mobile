import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors, spacingX, spacingY } from '../../constants/theme';
import Header from '../../components/Header';
import Typo from '../../components/Typo';

const Statistics = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View
          style={{
            borderBottomColor: colors.neutral700,
            borderWidth: 1,
          }}
        >
          <Header
            title="Statistics"
            style={{
              marginBottom: spacingY._10,
            }}
          />
        </View>
        <ScrollView>
          <View style={{ height: 900 }}>
            <Typo>Statistics</Typo>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: spacingX._10,
    height: 'auto',
  },
});
