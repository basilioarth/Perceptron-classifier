import React, { useState, useEffect } from 'react';
import { State } from '../models/State';
import { Neuron } from '../models/Neuron';
import { Line } from 'react-chartjs-2';
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

    const [neuron] = useState<Neuron>(() => new Neuron(states, threshold, learningRate, entryBias, weightBias, weight_one, weight_two));
    // const [config, setConfig] = useState({});

    useEffect(() => { 
        neuron.train(); 
        // const x = [];
        // const y = [];

        // const epochs = neuron.getEpochs();

        // const ultimaEpoca = epochs[epochs.length - 1];

        // const states = ultimaEpoca.getStates();

        // const state = states[0];

        // y.push(0);
        // x.push((((state.weight_bias || 0) * entryBias) * -1)/(state.weight_one || 0))
        // y.push((((state.weight_bias || 0) * entryBias) * -1)/(state.weight_two || 0))
        // x.push(0);

        // setConfig({
        //     labels: x,
        //     datasets: [
        //         {
        //         label: 'Rainfall',
        //         fill: false,
        //         lineTension: 0.5,
        //         backgroundColor: 'rgba(75,192,192,1)',
        //         borderColor: 'rgba(0,0,0,1)',
        //         borderWidth: 2,
        //         data: y
        //         }
        //     ]
        // })

        console.log(neuron.getEpochs()) 
    }, []);

    return (
        <div className="Neuron">
            {/* <Line
                style={{
                    width: '50%',
                }}
                type={"line"}
                data={config}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            /> */}
        </div>
    )
}