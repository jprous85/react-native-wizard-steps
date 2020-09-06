// Valorate change screen device
// https://stackoverflow.com/questions/47683591/react-native-different-styles-applied-on-orientation-change
import React from 'react';
import {Dimensions} from 'react-native';

export const BottomControls = {
  flex: 1,
  flexDirection: 'row',
  alignSelf: 'center',
  position: 'absolute',
  top: Dimensions.get('screen').height -100
}

export const BottomPointsContent = {
  flexDirection: 'row'
}

export const BottomPoints = {
  marginLeft: 2,
  marginRight: 2
}

export const StylePoints = {
  marginTop: 9,
  width: 10,
  height: 10,
  borderRadius: 100/2
}

export const ButtonDisabled = {
  color: '#cbcbcb'
}

export const PointDisabled = '#cbcbcb';

export const BackButton = {
  fontSize: 16,
  marginRight: 20
}

export const NextButton = {
  fontSize: 16,
  marginLeft: 20
}