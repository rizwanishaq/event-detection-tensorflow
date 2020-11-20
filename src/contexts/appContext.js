import React, { createContext, useContext, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

const AppContext = createContext();

export const GlobalContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  //   Constant for APP
  const MODEL_URL = "https://tfhub.dev/google/tfjs-model/yamnet/tfjs/1";
  const CLASS_MAP_URL =
    "https://raw.githubusercontent.com/rizwanishaq/event-detection-tensorflow/main/src/yamnet_class_map.csv";

  const [labels, setLabels] = useState({});
  const [model, setModel] = useState(null);
  const [start, setStart] = useState(false);
  const [top5, setTop5] = useState([]);

  useEffect(() => {
    fetch(CLASS_MAP_URL)
      .then((response) => response.text())
      .then((json) => {
        const labelarray = json.split("\n");
        // eslint-disable-next-line
        labelarray.map((array) => {
          const split = array.split(",");

          if (split[0] !== "index" && split !== undefined) {
            setLabels((prevState) => ({
              ...prevState,
              [split[0]]: split[2],
            }));
          }
        });
      });
  }, []);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadGraphModel(MODEL_URL, {
        fromTFHub: true,
      });
      setModel(model);
    };
    loadModel();
  }, []);

  return (
    <AppContext.Provider
      value={{
        labels,
        model,
        start,
        setStart,
        top5,
        setTop5,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
