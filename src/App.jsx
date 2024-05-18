import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './components/HomePage';
import MBTI from './components/MBTI';
import Result from './components/Result';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/MBTI' element={<MBTI />}></Route>
        <Route path='/Result' element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App