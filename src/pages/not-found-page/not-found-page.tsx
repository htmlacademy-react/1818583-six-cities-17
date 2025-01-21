import {Link} from 'react-router-dom';
import {AppPages} from '../../const.ts';
import './style.css';

function NotFoundPage() {
  return (
    <div className='root'>
      <h1 className='heading'>Страница не найдена</h1>
      <Link to={AppPages.Main} className='link'>
        На главную
      </Link>
    </div>
  );
}

export {NotFoundPage};
