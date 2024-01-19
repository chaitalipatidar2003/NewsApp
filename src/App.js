import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  c = "John";
  pageSize=5;
  // apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/home" element={<News setProgress={this.setProgress}  key="general" pageSize={8} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={8} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={8} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={8} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={8} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={8} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={8} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technologyx" pageSize={8} country="in" category="technology" />} />
        </Routes>
      </Router>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
    
  
//       <header className="App-header">
       
  
//         <h1>Welcomes you here</h1>
//         <h3>Wanna see dahaad series</h3>
//         <p>Will there be Season 2 for Dahaad?
// Zoya Akhtar confirms Sonakshi Sinha's 'Dahaad' will return ...
// ZOYA CONFIRMS 'DAHAAD' SEASON 2

// 'Dahaad' Season 1 was a success on Prime Video and fans have been awaiting an announcement on the same from the platform. While that is awaited, Zoya has confirmed that the show is returning for Season 2 with Reema already working on the script.10-Oct-2023</p>
       

//       </header>
//     </div>
//   );
// }

// export default App;
