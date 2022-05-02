import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Movie from './components/Movie';
import Bawah from './components/bawah';


import "./style/landingPage.css"

function App() {
  return (
   <div>
     <div className="myBG">
     <NavigationBar />
     <Intro />
     </div>
     <div className="trending">
       <Trending/>
     </div>
     <div className="movie">
       <Movie/>
     </div>
     <div className="bawah">
        <Bawah/>
     </div>
     
   </div>
  );
}

export default App;
