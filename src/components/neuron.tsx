import React, {useState, Dispatch, SetStateAction} from 'react';

interface Props {
    entry_one?: number;
    weight_one?: number;
    entry_two?: number;
    weight_two?: number;
    entry_bias?: number;
    weight_bias?: number;
    threshold: number;
    learning_rate: number;
    expected_class: number;
    handleWeighting(
        setWeightOne: Dispatch<SetStateAction<number>>, 
        setWeightTwo: Dispatch<SetStateAction<number>>, 
        setWeightBias: Dispatch<SetStateAction<number>>,
        output: number,
        classification: number,
        expected_class: number,
        learning_rate: number
    ): void
}

export default function Neuron({entry_one, weight_one, entry_two, weight_two, entry_bias, weight_bias, threshold, learning_rate, expected_class, handleWeighting}: Props) {
    const [entryOne, setEntryOne] = useState<number>(entry_one ? entry_one : 0);
    const [entryTwo, setEntryTwo] = useState<number>(entry_two ? entry_two: 0);
    const [entryBias, setEntryBias] = useState<number>(entry_bias ? entry_bias : 0);

    const [weightOne, setWeightOne] = useState<number>(weight_one ? weight_one : 0);
    const [weightTwo, setWeightTwo] = useState<number>(weight_two ? weight_two : 0);
    const [weightBias, setWeightBias] = useState<number>(weight_bias ? weight_bias : 1);

    function weighting(){
        const output = entryOne * weightOne + entryTwo * weightTwo + entryBias * weightBias;
        const classification = output >= threshold ? 1 : 0;

        handleWeighting(setWeightOne, setWeightTwo, setWeightBias, output, classification, expected_class, learning_rate);
    }

    return (
        <div className="Neuron">
            <h1>Neuron Perceptron</h1>
        </div>
    )
}