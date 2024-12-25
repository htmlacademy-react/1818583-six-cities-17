import {useAppSelector} from '../../hooks/useAppSelector.ts';
import './error-message-style.css';

function ErrorMessage() {
  const error = useAppSelector((state) => state.error);

  return error ? <div className='error-message'>{error}</div> : null;
}

export { ErrorMessage };
