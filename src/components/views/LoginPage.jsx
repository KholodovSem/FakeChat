import { Modal } from '../index';
import { signIn, signInWithGoogle, signUp } from '../../firebase';
import { ReactComponent as FacebookIcon } from '../../image/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../image/google.svg';
import s from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/user-action';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case 'login':
        setLogin(value);
        return;

      case 'password':
        setPassword(value);
        return;

      default:
        return;
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    signUp(login, password);
    setLogin('');
    setPassword('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await dispatch(setAuth({
      user: {
        email: login,
        displayName: '',
        photoURL: 'https://svgshare.com/i/m7d.svg',
      },
    }));
    await signIn(login, password);

    navigate("/FakeChat", { replace: true });


    setLogin('');
    setPassword('');
  };

  return (
    <div>
      <Modal>
        <form className={s.loginForm}>
          <h2 className={s.formTitle}>Login or SignUp</h2>
          <label className={s.label}>
            <p className={s.text}>Login</p>
            <input
              name='login'
              autoComplete='off'
              type='text'
              value={login}
              className={s.input}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            <p className={s.text}>Password</p>
            <input
              name='password'
              autoComplete='off'
              type='password'
              value={password}
              className={s.input}
              onChange={handleChange}
            />
          </label>
          <button className={s.loginBtn} onClick={handleLogin}>Login</button>
          <button className={s.loginBtn} onClick={handleSignUp}>SignUp</button>
          <div>
            <button className={s.authBtn}>
              <FacebookIcon width='30' />
            </button>
            <button className={s.authBtn} onClick={(e) => {
              e.preventDefault();
              signInWithGoogle()
                .then( async (result) => {
                  await dispatch(setAuth({
                    user: {
                      email: result.user.email,
                      displayName: result.user.displayName,
                      photoURL: result.user.photoURL,
                    },
                  }));
                  navigate("/FakeChat", { replace: true });
                }).catch((error) => {
                alert(error);
              });
            }}>
              <GoogleIcon width='30' />
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default LoginPage;
