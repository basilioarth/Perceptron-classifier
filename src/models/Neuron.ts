import { State } from './State';
import { Epoch } from './Epoch';

export class Neuron {
    private epochs: Epoch[] = [];
    private states: State[] = [];
    private threshold: number = 0;
    private learning_rate: number = 0;
    private entry_bias: number = 0;
    private weight_bias: number = 0;
    private weight_one: number = 0;
    private weight_two: number = 0;

    constructor(
        states: State[], 
        threshold: number, 
        learning_rate: number, 
        entry_bias: number, 
        weight_bias: number, 
        weight_one: number, 
        weight_two: number
    ) {
        this.states = states;
        this.threshold = threshold;
        this.learning_rate = learning_rate;
        this.entry_bias = entry_bias;
        this.weight_bias = weight_bias;
        this.weight_one = weight_one;
        this.weight_two = weight_two;
    }

    public train() {
        if(this.epochs.length === 0) {
            this.training();
        }
        while(!this.isNeuronReady()) {
            this.training();
        }
    }

    private training(){
        this.states.map((value, index) => {
                this.weighting(value)
                this.handleWeighting(index);
            })

        this.createEpoch(this.states);
    }

    private weighting(state: State) {     
        const output = state.entry_one * this.weight_one + state.entry_two * this.weight_two + this.entry_bias * (this.weight_bias ? this.weight_bias : 1);
        const classification = output > this.threshold ? 1 : 0;

        if(classification !== state.expected_class) {
            state.error = state.expected_class - output;
        } else state.error = 0;

        state.output = output;
        state.classification = classification;
    }

    private handleWeighting(index: number) {
        this.weight_one = this.weight_one + (this.learning_rate * (this.states[index].error || 0) * this.states[index].entry_one);
        this.weight_two = this.weight_two + (this.learning_rate * (this.states[index].error || 0) * this.states[index].entry_two);
        this.weight_bias = this.weight_bias + (this.learning_rate * (this.states[index].error || 0) * this.entry_bias);

        this.states[index].weight_one = this.weight_one;
        this.states[index].weight_two = this.weight_two;
        this.states[index].weight_bias = this.weight_bias;
    }

    public getEpochs(): Epoch[] {
        return this.epochs;
    }

    private createEpoch(states: State[]) {
        const newArr: State[] = [];
        for(let state of states){
            let s = Object.assign({},state)
            newArr.push(s);
        }
        this.epochs.push(new Epoch(newArr));
    }

    private isNeuronReady(): boolean {
        return this.epochs[this.epochs.length - 1].isNeuronReady();
    }
}