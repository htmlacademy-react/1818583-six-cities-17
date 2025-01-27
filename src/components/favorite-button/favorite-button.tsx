import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {changeFavoriteAction} from '../../api/actions.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {selectAuthStatus} from '../../store/user-slice/selectors.ts';
import {AuthStatus} from '../../api/const.ts';
import {useNavigate} from 'react-router-dom';
import {AppPages} from '../../const.ts';

type Props = {
  offerId: string;
  isFavorite: boolean;
  buttonClass: string;
  width: string;
  height: string;
}

function FavoriteButton({ offerId, isFavorite, buttonClass, width, height }: Props) {
  const authStatus = useAppSelector(selectAuthStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoriteClass = isFavorite ? `${buttonClass}__bookmark-button--active` : '';

  const handleAddFavorite = () => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(changeFavoriteAction({
        offerId,
        status: isFavorite ? 0 : 1,
      }));
    } else {
      navigate(AppPages.Login);
    }
  };

  return (
    <button
      className={`${buttonClass}__bookmark-button button ${favoriteClass}`}
      type="button"
      onClick={handleAddFavorite}
    >
      <svg className={`${buttonClass}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export { FavoriteButton };
