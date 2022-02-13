
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: sign in action
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);


  return (
    <div>
      <form className="form border-try bg-form" onSubmit={submitHandler}>
        <div>
          <h1 className='title'>SIGN IN</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div >
          <label  className='labels' htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label  className='labels' htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className='center'>
          <label />
          <button className="signin" type="submit">
            SIGN IN
          </button>
        </div>
        <div>
          <label />
          <div className='labels'>
            New customer? <Link  className='label-link' to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}