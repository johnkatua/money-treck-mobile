import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import { spacingX } from '../constants/theme';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT ? [SCREEN_WIDTH, SCREEN_HEIGHT] : [SCREEN_HEIGHT, SCREEN_WIDTH];

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const horizontalScale = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(((shortDimension / guidelineBaseWidth) * size) as number)
  );

export const verticalScale = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(((longDimension / guidelineBaseHeight) * size) as number)
  );

export const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacingX._20,
    overflow: 'visible',
  },
});
