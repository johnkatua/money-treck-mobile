import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ModalWrapper from '../../components/ModalWrapper';
import { modalStyles } from '../../utils/styling';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { spacingY } from '../../constants/theme';

const RevenueList = () => {
  return (
    <ModalWrapper>
      <View style={modalStyles.container}>
        <Header
          title="Revenues"
          leftIcon={<BackButton />}
          style={{
            marginBottom: spacingY._10,
          }}
        />
      </View>
    </ModalWrapper>
  );
};

export default RevenueList;

const styles = StyleSheet.create({
  container: {},
});
