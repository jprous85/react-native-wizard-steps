import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  BackButton,
  BottomControls,
  ButtonDisabled,
  NextButton,
  BottomPoints,
  BottomPointsContent,
  StylePoints,
  PointDisabled
} from "../styles/BottomControls";
import { COLORSWIZARD } from '../styles/ColorsWizard'


const BottomButtons = (props) => {

  const {state, constants, modifySteps} = props;

  const COLOR = state.color;
  console.log(state);

  let points = <View style={BottomPointsContent}>
    {state.steps.map((e, i) => (
      <TouchableOpacity
        key={i}
        onPress={() => {
          if (i !== state.currentStep) {
            constants.goTo(i);
            modifySteps();
          }
        }}
        style={BottomPoints}
      >
        <View style={[COLORSWIZARD[COLOR], StylePoints, {backgroundColor: (i === state.currentStep) ? PointDisabled : COLOR.toLowerCase()}]}/>
      </TouchableOpacity>
    ))}</View>

  return (
    <View style={BottomControls}>
      <TouchableOpacity
        onPress={() => {
          if (state.currentStep !== 0) {
            constants.goBack();
            modifySteps();
          }
        }}
      >
        <Text style={[(state.currentStep === 0) ? ButtonDisabled : COLORSWIZARD[COLOR], BackButton]}>Anterior</Text>
      </TouchableOpacity>

      {points}

      <TouchableOpacity
        onPress={() => {
          constants.goNext();
          modifySteps();
        }}
      >
        <Text style={[(state.currentStep === state.steps.length-1) ? ButtonDisabled : COLORSWIZARD[COLOR], NextButton]}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomButtons;