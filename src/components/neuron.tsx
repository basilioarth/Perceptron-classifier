import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { State } from '../models/State';
import { Neuron } from '../models/Neuron';
interface Props {
    states: State[]
    entryBias: number
    weightBias: number
    threshold: number
    learningRate: number
    weight_one: number
    weight_two: number
    onFinish: Dispatch<SetStateAction<any>>
}

export default function NeuronComponent({ states, entryBias, weightBias, threshold, learningRate, weight_one, weight_two, onFinish }: Props) {

    const [neuron] = useState<Neuron>(() => new Neuron(states, threshold, learningRate, entryBias, weightBias, weight_one, weight_two));

    useEffect(() => { 
        neuron.train(); 
        const epochs = neuron.getEpochs();
        const states = epochs[epochs.length - 1].getStates();
        const state = states[states.length - 1];

        console.log(state);

        onFinish({
            weight_one: state.weight_one,
            weight_two: state.weight_two,
            weightBias: state.weight_bias,
            isTestReady: true
        })

        console.log(neuron.getEpochs()) 
    }, []);

    return (
        <div className="Neuron">
        </div>
    )
}