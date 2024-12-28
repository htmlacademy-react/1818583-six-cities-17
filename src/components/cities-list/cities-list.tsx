import {CITY_LINKS} from '../../const.ts';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';
import './cities-list-style.css';
import {changeCity} from '../../store/reducer.ts';

type Props = {
  cityId?: string;
}

function CitiesList({ cityId }: Props) {
  const dispatch = useAppDispatch();

  const onLinkClick = (id: string) => {
    dispatch(changeCity(id));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        CITY_LINKS.map((link) => (
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

export {CitiesList};
