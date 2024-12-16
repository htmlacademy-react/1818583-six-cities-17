import {Link} from 'react-router-dom';
import {APP_PAGES} from '../../const.ts';
import './page-404-style.css';

function Page404() {
  return (
    <div className='root'>
      <h1 className='heading'>Страница не найдена</h1>
      <Link to={APP_PAGES.MAIN} className='link'>
        На главную
      </Link>
    </div>
  );
}

export {Page404};
