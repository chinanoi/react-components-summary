import React, { useMemo } from 'react';
import { Config } from './config';

const Login = () => {
  const config = useMemo(() => {
    return new Config({}).getCongfig;
  }, []);

  console.log('config', config);
  return <div>Login</div>;
};

export default Login;
