import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WizardStep from './src/components/WizardStep'

import Step1 from './src/components/example/Step1';
import Step2 from './src/components/example/Step2';
import Step3 from './src/components/example/Step3';

export default function App() {

  const wizardComponents = [
      {component: <Step1 />},
      {component: <Step2 />},
      {component: <Step3 />}
    ];

  return (
    <View>
      <WizardStep
        color={WizardStep.Constants.Color.GREEN}
        gradient={WizardStep.Constants.Gradient.ON}
        steps={wizardComponents}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});
