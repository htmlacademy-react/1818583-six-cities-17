import {Link} from 'react-router-dom';
import {AppPages} from '../../const.ts';
import './not-found-page-style.css';

function NotFoundPage() {
  return (
    <div className='root'>
      <h1 className='heading'>Страница не найдена</h1>
      <Link to={AppPages.MAIN} className='link'>
        На главную
      </Link>
    </div>
  );
}

export {NotFoundPage};
