import {Link, Navigate} from 'react-router-dom';
import {AppPages, cityLinks} from '../../const.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {loginAction} from '../../api/actions.ts';
import {FormEvent, useRef} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {AuthStatus} from '../../api/const.ts';
import {Spinner} from '../../shared/spinner/spinner.tsx';
import {selectAuthStatus, selectIsLoadingUser} from '../../store/user-slice/selectors.ts';
import {getRandomCityLink} from '../../utils/get-random-city-link.ts';
import {changeCity} from '../../store/app-slice/app-slice.ts';

function LoginPage() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const loading = useAppSelector(selectIsLoadingUser);
  const authStatus = useAppSelector(selectAuthStatus);

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  const city = getRandomCityLink(cityLinks);

  const handleCityClick = () => {
    dispatch(changeCity(city.id));
  };

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to={AppPages.Main} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppPages.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                  pattern="^(?=.*[a-zA-Z])(?=.*\d).{2,}$"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppPages.Main}
                onClick={handleCityClick}
              >
                <span>{city.displayName}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {LoginPage};
