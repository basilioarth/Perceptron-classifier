import { State } from './State';
import { Epoch } from './Epoch';

export class Neuron {
    private epochs: Epoch[] = [];
    private states: State[] = [];
    private threshold: number = 0;
    private learning_rate: number = 0;
    private entry_bias: number = 0;
    private weight_bias: number = 1;

    constructor(states: State[], threshold: number, learning_rate: number, entry_bias: number, weight_bias: number) {
        this.states = states;
        this.threshold = threshold;
        this.learning_rate = learning_rate;
        this.entry_bias = entry_bias;
        this.weight_bias = weight_bias;
    }

    public train() {
        while(!this.isNeuronReady()) {
            this.training();
        }
    }

    private training(){
        this.states.map((state: State, index: number) => {
            this.weighting(state)
            this.handleWeighting(index);
        })
        this.createEpoch();
    }

    private weighting(state: State) {        
        const output = state.entry_one * state.weight_one + state.entry_two * state.weight_two + this.entry_bias * (this.weight_bias ? this.weight_bias : 1);
        const classification = output >= this.threshold;

        state.output = output;
        state.classification = classification;
    }

    private handleWeighting(index: number) {

        const previous = index === 0 ? 0 : index - 1;

        this.states[index].weight_one = this.states[previous].weight_one + (this.learning_rate * (this.states[index].error || 0) * this.states[index].entry_one);
        this.states[index].weight_two = this.states[previous].weight_two + (this.learning_rate * (this.states[index].error || 0) * this.states[index].entry_two);
    }

    public getEpochs(): Epoch[] {
        return this.epochs;
    }

    private createEpoch() {
        const epoch = new Epoch(this.states);
        this.epochs.push(epoch);
    }

    private isNeuronReady(): boolean {
        return this.epochs[0].isNeuronReady();
    }
}