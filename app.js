import React, { useEffect, useState } from 'react';
import times from 'ramda.times';
import { oneMinute } from './constants';
import useTriggerEvent from './use-trigger-event';
import fetchData from './fetch-data';

const useCounter = () => {
  const [ counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return {
    counter,
    incrementCounter,
  }
};

// look into how can replace a render function with a react component
export default function App(render) {
  const { counter, incrementCounter } = useCounter();
  const eventTriggered = useTriggerEvent(oneMinute);
  const [ data, setData ] = useState(); 
  
  useEffect(() => {
    (async () => setData(await fetchData()))();
    incrementCounter();
  }, [eventTriggered]);

  return (
    <div>
      {render(data)}
      <div>
        Logs:
      </div>
        {times((count) => (
          <p>
            event happened {count + 1} times
          </p>
        ), counter)}
    </div>
  )
}