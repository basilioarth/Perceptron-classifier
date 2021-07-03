import { State } from './State';

export class Epoch {
    private states: State[] = [];

    constructor(states: State[]) {
        this.states = states;
    }
    
    public getStates(): State[] {
        console.log(this.states);
        return this.states;
    }

    public isNeuronReady(): boolean {
        for (const state of this.states) {
            if(state.classification !== state.expected_class) {
                return false;
            }
        }
        return true;
    }

}

