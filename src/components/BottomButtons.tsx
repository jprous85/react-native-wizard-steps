import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {BackButton, BottomControls, ButtonDisabled, NextButton, BottomPoints, BottomPointsContent} from "../styles/BottomControls";
import { COLORSWIZARD } from './../styles/ColorsWizard'
const BottomButtons = (props) => {

  const {state, constants, modifySteps} = props;

  const COLOR = state.color;
  console.log(state);

  let points = <View style={BottomPointsContent}>
    {state.steps.map((e, i) => (
      <TouchableOpacity
        key={i}
        onPress={() => {
          console.log(i);
          constants.goTo(i);
          modifySteps();
        }}
        style={BottomPoints}
      >
        <Text style={[COLORSWIZARD[COLOR]]}>O</Text>
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