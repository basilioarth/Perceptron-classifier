import React, { useState } from 'react';
import NeuronComponent from './components/neuron';
import { State } from './models/State';

const App = () => {

    const [isNeuronReady, setIsNeuronReady] = useState<boolean>(false);

    const [states, setStates] = useState<State[]>([]);
    const [entryBias, setEntryBias] = useState<number>(0);

    const [weightBias, setWeightBias] = useState<number>(1);

    const [threshold, setThreshold] = useState<number>(0);
    const [learningRate, setLearningRate] = useState<number>(1);

    const [weightOne, setWeightOne] = useState<number>(3);
    const [weightTwo, setWeightTwo] = useState<number>(2);

    const [entries, setEntries] = useState({
      entry1: 0,
      entry2: 0,
      entry3: 0,
      entry4: 1,
      entry5: 1,
      entry6: 0,
      entry7: 1,
      entry8: 1
    })

    const [classes, setClasses] = useState({
      classe1: 0,
      classe2: 0,
      classe3: 1,
      classe4: 1,
    })

    const treinar = () => {
      states.push({entry_one: entries.entry1, entry_two: entries.entry2, expected_class: classes.classe1});;
      states.push({entry_one: entries.entry3, entry_two: entries.entry4, expected_class: classes.classe2});;
      states.push({entry_one: entries.entry5, entry_two: entries.entry6, expected_class: classes.classe3});;
      states.push({entry_one: entries.entry7, entry_two: entries.entry8, expected_class: classes.classe4});;
      setIsNeuronReady(true);
    }

  return (
    <div>

      <form>
        <div>
          <label htmlFor="">Entrada 1</label>
          <input type="text" value={entries.entry1} onChange={(e) => setEntries({...entries, entry1: Number(e.target.value)})} />
        </div>
        <div>
          <label htmlFor="">Entrada 2</label>
          <input type="text" value={entries.entry2} onChange={(e) => setEntries({...entries, entry2: Number(e.target.value)})} />
        </div>
       
        <div>
          <label htmlFor="">Classe esperada 1</label>
          <input type="text" value={classes.classe1} onChange={(e) => setClasses({...classes, classe1: Number(e.target.value)})} />
        </div>
        <div>
          <label htmlFor="">Entrada 3</label>
          <input type="text" value={entries.entry3} onChange={(e) => setEntries({...entries, entry3: Number(e.target.value)})} />
        </div>
       
        <div>
          <label htmlFor="">Entrada 4</label>
          <input type="text" value={entries.entry4} onChange={(e) => setEntries({...entries, entry4: Number(e.target.value)})} />
        </div>
       
        <div>
          <label htmlFor="">Classe esperada 2</label>
          <input type="text" value={classes.classe2} onChange={(e) => setClasses({...classes, classe2: Number(e.target.value)})} />
        </div>
        <div>
          <label htmlFor="">Entrada 5</label>
          <input type="text" value={entries.entry5} onChange={(e) => setEntries({...entries, entry5: Number(e.target.value)})} />
        </div>
        
        <div>
          <label htmlFor="">Entrada 6</label>
          <input type="text" value={entries.entry6} onChange={(e) => setEntries({...entries, entry6: Number(e.target.value)})} />
        </div>
       
        <div>
          <label htmlFor="">Classe esperada 3</label>
          <input type="text" value={classes.classe3} onChange={(e) => setClasses({...classes, classe3: Number(e.target.value)})} />
        </div>
        <div>
          <label htmlFor="">Entrada 7</label>
          <input type="text" value={entries.entry7} onChange={(e) => setEntries({...entries, entry7: Number(e.target.value)})} />
        </div>
        
        <div>
          <label htmlFor="">Entrada 8</label>
          <input type="text" value={entries.entry8} onChange={(e) => setEntries({...entries, entry8: Number(e.target.value)})} />
        </div>
        <div>
          <label htmlFor="">Peso 1</label>
          <input type="text" value={weightOne} onChange={(e) => setWeightOne(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="">Peso 2</label>
          <input type="text" value={weightTwo} onChange={(e) => setWeightTwo(Number(e.target.value))} />
        </div>
        
        <div>
          <label htmlFor="">Classe esperada 4</label>
          <input type="text" value={classes.classe4} onChange={(e) => setClasses({...classes, classe4: Number(e.target.value)})} />
        </div>
        <div>
          <label htmlFor="">Limite</label>
          <input type="text" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="">Taxa de aprendizagem</label>
          <input type="text" value={learningRate} onChange={(e) => setLearningRate(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="">Bias</label>
          <input type="text" value={entryBias} onChange={(e) => setEntryBias(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="">Peso do bias</label>
          <input type="text" value={weightBias} onChange={(e) => setWeightBias(Number(e.target.value))} />
        </div>
        <button onClick={treinar} type="button">BOTAO PRA APERTAR</button>
      </form>


      {
        isNeuronReady ? 
        <NeuronComponent
          states = {states}
          entryBias = {entryBias}
          weightBias = {weightBias}
          threshold = {threshold}
          learningRate = {learningRate}
          weight_one = {weightOne}
          weight_two = {weightTwo}
        />
        : <></>
      }
        
    </div>
  );
}

export default App;
