import React, { useState, useEffect } from 'react';
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
}

export default function NeuronComponent({ states, entryBias, weightBias, threshold, learningRate, weight_one, weight_two }: Props) {

    const [neuron] = useState<Neuron>(() => new Neuron(states, entryBias, weightBias, threshold, learningRate, weight_one, weight_two));

    useEffect(() => {neuron.train(); console.log(neuron.getEpochs())});

    return (
        <div className="Neuron">
            <h1>Neuron Perceptron</h1>
        </div>
    )
}