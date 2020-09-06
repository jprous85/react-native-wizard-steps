import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { InterfacesWizardProps, InterfacesWizardState, Constants } from '../interfaces/InterfacesWizard'
import BottomButtons from "../components/BottomButtons";
import {TouchableOpacity} from "react-native-gesture-handler";

const {width, height} = Dimensions.get('window');

class WizardStep extends React.Component<InterfacesWizardProps, InterfacesWizardState> {

  state:InterfacesWizardState;
  static Constants = Constants;
  private constants;
  private currentViewStep;

  constructor(props: InterfacesWizardProps) {
    super(props);

    this.state = {
      // Steps
      currentStep: (typeof props.currentStep === "number") ? props.currentStep : 0,
      currentViewStep: null,

      // Views
      steps: props.steps,

      // Styles
      color: props.color,
      gradient: props.gradient || false,
    }

    this.constants = new Constants(this.state);

  }
  UNSAFE_componentWillMount() {
    this.modifySteps();
  }
  
  modifySteps() {
    const returnData = this.constants.getStep();
    // @ts-ignore
    this.setState({
      currentViewStep: returnData.stepsView,
      currentStep: returnData.currentStep
    });
  }

  render() {
    return(
      <View style={{ height: height }}>

        {this.state.currentViewStep}

        <BottomButtons
          state={this.state}
          constants={this.constants}
          modifySteps={() => this.modifySteps()}
        />
      </View>
    );
  }
}



export default WizardStep;