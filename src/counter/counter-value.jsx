import { useSelector } from 'react-redux';

function CounterValue() {
  const { countValue } = useSelector((state) => state);

  return <div>Counter value is {countValue}</div>;
}

export default CounterValue;
