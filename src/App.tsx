import React, { useState } from 'react';
import Neuron from './components/neuron';
import { State } from './models/State';

const App = () => {

    const [isNeuronReady, setIsNeuronReady] = useState<boolean>(false);

    const [states, setStates] = useState<State[]>([]);
    const [entryBias, setEntryBias] = useState<number>(0);

    const [weightBias, setWeightBias] = useState<number>(1);

    const [threshold, setThreshold] = useState<number>(0);
    const [learningRate, setLearningRate] = useState<number>(0);

  return (
    <div>
      {
        isNeuronReady ? 
        <Neuron
          entryBias = {entryBias}
          weightBias = {weightBias}
          threshold = {threshold}
          learningRate = {learningRate}
        />
        : <></>
      }
        
    </div>
  );
}

export default App;
