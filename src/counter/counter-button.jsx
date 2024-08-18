import { useDispatch } from 'react-redux';
import { handleIncrementCounter } from '../store/slices/counter';

function CounterButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      handleIncrementCounter({
        id: 1,
        name: 'Shiva',
      })
    );
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}
    >
      Increase Count
    </button>
  );
}

export default CounterButton;
