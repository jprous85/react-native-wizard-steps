
export interface InterfacesWizardState {
  currentStep: number;
  currentViewStep: any;

  // Steps
  steps: any

  // Styles of Wizard
  color: string;
  gradient: boolean;

  // show options
  //showText: boolean

}

export interface InterfacesWizardProps {
  currentStep: number;

  // Steps
  steps: object

  // Styles of Wizard
  color: string;
  gradient: boolean;

  // show options
  showText: boolean
}

let Colors = {
  BLUE: 'BLUE',
  RED: 'RED',
  GREEN: 'GREEN'
}

export class Constants {
  static Color = Colors;
  static Gradient = {"ON": true, "OFF": false};

  steps;
  currentStep;
  constructor(props) {
    this.steps = props.steps;
    this.currentStep = props.currentStep;
  }

  goTo(num:number) {
    if (num >= 0 && num <= this.steps.length -1) this.currentStep = num;
  }

  goBack() {
    if (this.currentStep - 1 >= 0) this.currentStep = this.currentStep - 1;
  }

  goNext() {
    if (this.currentStep + 1 <= this.steps.length -1) this.currentStep = this.currentStep + 1;
  }
  
  getStep() {
    return {
      stepsView: this.steps[this.currentStep].component,
      currentStep: this.currentStep
    };
  }

}