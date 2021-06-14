import { useEffect, useMemo } from 'react';

export default function useTriggerEvent(interval) {
  const [ eventTriggered, setEventTriggered ] = useState(false);

  const doubleInterval = useMemo(() => 2 * interval, [interval]);

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => setEventTriggered(false), doubleInterval);
    }, interval);
    setInterval(() => setEventTriggered(true), doubleInterval);
  }, []);

  return eventTriggered;
}
