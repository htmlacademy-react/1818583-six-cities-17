import {cityLinks} from '../../const.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import './style.css';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {memo} from 'react';
import {changeCity} from '../../store/app-slice/app-slice.ts';
import {selectCity} from '../../store/app-slice/selectors.ts';

function CitiesList() {
  const cityId = useAppSelector(selectCity);

  const dispatch = useAppDispatch();

  const onLinkClick = (id: string) => {
    dispatch(changeCity(id));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        cityLinks.map((link) => (
          <li className="locations__item" key={link.id}>
            <div className={`locations__item-link tabs__item${link.id === cityId ? ' tabs__item--active' : ''}`} onClick={() => onLinkClick(link.id)}>
              <span>{link.displayName}</span>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

const MemoizedCitiesList = memo(CitiesList);
export {MemoizedCitiesList as CitiesList};
