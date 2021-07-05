import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { State } from '../models/State';
import { Neuron } from '../models/Neuron';
import { Epoch } from '../models/Epoch';
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

    const [epochs, setEpochs] = useState<Epoch[]>();

    useEffect(() => {
        neuron.train();
        const epochs = neuron.getEpochs();
        setEpochs(epochs);
        const states = epochs[epochs.length - 1].getStates();
        const state = states[states.length - 1];

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
            {
                epochs?.map((epoch: Epoch, index: number) => (
                    <div className="card mt-3">
                        <div className="card-header">
                            <h4>Época { index + 1 }</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    epoch.getStates().map((state: State, index: number) => (
                                        <div className="col-3">
                                            <ul>
                                                <h6>Estado {index + 1}</h6>
                                                <li>x1: {state.entry_one}</li>
                                                <li>x2: {state.entry_two}</li>
                                                <li>Bias: {entryBias}</li>
                                                <li>w1: {state.weight_one}</li>
                                                <li>w2: {state.weight_two}</li>
                                                <li>w3: {state.weight_bias}</li>
                                                <li>Classe esperada: {state.expected_class}</li>
                                                <li>Classificação: {state.classification}</li>
                                                <li>Erro: {state.error}</li>
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}