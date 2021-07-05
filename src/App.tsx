import React, { useState } from 'react';
import NeuronComponent from './components/neuron';
import { State } from './models/State';

const App = () => {

  const [isNeuronReady, setIsNeuronReady] = useState<boolean>(false);

  const [states, setStates] = useState<State[]>([]);
  const [entryBias, setEntryBias] = useState("1");

  const [weightBias, setWeightBias] = useState("0");

  const [threshold, setThreshold] = useState("0");
  const [learningRate, setLearningRate] = useState("0.5");

  const [weightOne, setWeightOne] = useState("3");
  const [weightTwo, setWeightTwo] = useState("2");

  const [entries, setEntries] = useState({
    entryOne: "0",
    entryTwo: "0",
    entryThree: "0",
    entryFour: "1",
    entryFive: "1",
    entrySix: "0",
    entrySeven: "1",
    entryEight: "1"
  })

  const [classes, setClasses] = useState({
    expectedClassOne: "0",
    expectedClassTwo: "0",
    expectedClassThree: "1",
    expectedClassFour: "1",
  })

  const treinar = () => {
    setStates([
      { 
        entry_one: Number(entries.entryOne), 
        entry_two: Number(entries.entryTwo), 
        expected_class: Number(classes.expectedClassOne) 
      },
      {
        entry_one: Number(entries.entryTwo), 
        entry_two: Number(entries.entryFour), 
        expected_class: Number(classes.expectedClassTwo)
      },
      {
        entry_one: Number(entries.entryFive), 
        entry_two: Number(entries.entrySix), 
        expected_class: Number(classes.expectedClassThree)
      },
      {
        entry_one: Number(entries.entrySeven), 
        entry_two: Number(entries.entryEight), 
        expected_class: Number(classes.expectedClassFour)
      }
    ]);

    setIsNeuronReady(true);
  }

  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              <h4>Primeira entrada</h4>
              <div className="row">
                <div className="mb-3 col-3">
                  <label className="form-label">x1</label>
                  <input type="text" pattern="[+-]?([0-9]*[.])?[0-9]+" value={entries.entryOne} onChange={(e) => setEntries({ ...entries, entryOne: e.target.value })} className="form-control" />
                </div>
                <div className="mb-3 col-3">
                  <label className="form-label">x2</label>
                  <input type="text" value={entries.entryTwo} onChange={(e) => setEntries({ ...entries, entryTwo: e.target.value })} className="form-control" />
                </div>
              </div>
              <div className="mb-3 col-5">
                <label className="form-label">Classe esperada</label>
                <input type="text" value={classes.expectedClassOne} onChange={(e) => setClasses({ ...classes, expectedClassOne: e.target.value })} className="form-control" />
              </div>
            </div>
            <div className="col-3">
              <h4>Segunda entrada</h4>
              <div className="row">
                <div className="mb-3 col-3">
                  <label className="form-label">x1</label>
                  <input type="text" value={entries.entryThree} onChange={(e) => setEntries({ ...entries, entryThree: e.target.value })} className="form-control" />
                </div>
                <div className="mb-3 col-3">
                  <label className="form-label">x2</label>
                  <input type="text" value={entries.entryFour} onChange={(e) => setEntries({ ...entries, entryFour: e.target.value })} className="form-control" />
                </div>
              </div>
              <div className="mb-3 col-5">
                <label className="form-label">Classe esperada</label>
                <input type="text" value={classes.expectedClassTwo} onChange={(e) => setClasses({ ...classes, expectedClassTwo: e.target.value })} className="form-control" />
              </div>
            </div>
            <div className="col-3">
              <h4>Terceiro entrada</h4>
              <div className="row">
                <div className="mb-3 col-3">
                  <label className="form-label">x1</label>
                  <input type="text" value={entries.entryFive} onChange={(e) => setEntries({ ...entries, entryFive: e.target.value })} className="form-control" />
                </div>
                <div className="mb-3 col-3">
                  <label className="form-label">x2</label>
                  <input type="text" value={entries.entrySix} onChange={(e) => setEntries({ ...entries, entrySix: e.target.value })} className="form-control" />
                </div>
              </div>
              <div className="mb-3 col-5">
                <label className="form-label">Classe esperada</label>
                <input type="text" value={classes.expectedClassThree} onChange={(e) => setClasses({ ...classes, expectedClassThree: e.target.value })} className="form-control" />
              </div>
            </div>
            <div className="col-3">
              <h4>Quarta entrada</h4>
              <div className="row">
                <div className="mb-3 col-3">
                  <label className="form-label">x1</label>
                  <input type="text" value={entries.entrySeven} onChange={(e) => setEntries({ ...entries, entrySeven: e.target.value })} className="form-control" />
                </div>
                <div className="mb-3 col-3">
                  <label className="form-label">x2</label>
                  <input type="text" value={entries.entryEight} onChange={(e) => setEntries({ ...entries, entryEight: e.target.value })} className="form-control" />
                </div>
              </div>
              <div className="mb-3 col-5">
                <label className="form-label">Classe esperada</label>
                <input type="text" value={classes.expectedClassFour} onChange={(e) => setClasses({ ...classes, expectedClassFour: e.target.value })} className="form-control" />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <h4>Pesos</h4>
            <div className="mb-3 col-2">
              <label className="form-label">w1</label>
              <input type="text" value={weightOne} onChange={(e) => setWeightOne(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3 col-2">
              <label className="form-label">w2</label>
              <input type="text" value={weightTwo} onChange={(e) => setWeightTwo(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3 col-2">
              <label className="form-label">Bias</label>
              <input type="text" value={weightBias} onChange={(e) => setWeightBias(e.target.value)} className="form-control" />
            </div>
          </div>
          <hr />
          <div className="row">
            <h4>Parâmetros</h4>
            <div className="mb-3 col-2">
              <label className="form-label">Limite</label>
              <input type="text" value={threshold} onChange={(e) => setThreshold(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3 col-2">
              <label className="form-label">Taxa de aprendizado</label>
              <input type="text" value={learningRate} onChange={(e) => setLearningRate(e.target.value)} className="form-control" />
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <button className="btn btn-primary" onClick={treinar} type="button">Treinar</button>
          </div>
        </div>
      </div>
      {
        isNeuronReady ?
          <NeuronComponent
            states={states}
            entryBias={Number(entryBias)}
            weightBias={Number(weightBias)}
            threshold={Number(threshold)}
            learningRate={Number(learningRate)}
            weight_one={Number(weightOne)}
            weight_two={Number(weightTwo)}
          />
          : <></>
      }

    </div >
  );
}

export default App;
