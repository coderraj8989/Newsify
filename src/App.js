import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="all" category='' />} />
            <Route exact path="/business" element={<News key="business" category='business' />} />
            <Route exact path="/sports" element={<News key="sports" category='sports' />} />
            <Route exact path="/national" element={<News key="national" category='national' />} />
            <Route exact path="/world" element={<News key="world" category='world' />} />
            <Route exact path="/politics" element={<News key="politics" category='politics' />} />
            <Route exact path="/technology" element={<News key="technology" category='technology' />} />
            <Route exact path="/startup" element={<News key="startup" category='startup' />} />
            <Route exact path="/entertainment" element={<News key="entertainment" category='entertainment' />} />
            <Route exact path="/science" element={<News key="science" category='science' />} />
            <Route exact path="/automobile" element={<News key="automobile" category='automobile' />} />
            <Route exact path="/miscellaneous" element={<News key="miscellaneous" category='miscellaneous' />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
