import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaiTapXucXac from './pages/bai-tap-xuc-xac/bai-tap-xuc-xac';
import BaiTapXucXacRedux from './pages/bai-tap-xuc-xac-redux/bai-tap-xuc-xac';

function App(): JSX.Element {
  return (
    <>
    {/* <BaiTapXucXac /> */}
    <BaiTapXucXacRedux />
    </>
  );
}

export default App;
