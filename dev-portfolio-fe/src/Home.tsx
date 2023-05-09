import React from 'react';
import './App.css';
import Header from './Header';

function Home() {
  return (
    <div className="App">
        <Header/>
        <body>
            <h1>Fullstack Engineer,</h1>
            <h1>UI/UX Designer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse feugiat, elit imperdiet viverra congue, leo nunc blandit est, 
                sit amet tempor erat est sit amet nunc. Praesent blandit ante velit, et tristique 
                nibh tincidunt sed. Morbi cursus nibh nec nibh dictum pretium. Cras vitae sagittis 
                felis. Sed nisi augue,laoreet eget tortor id, auctor tempor leo. Sed facilisis 
                tellus non posuere elementum. Vestibulum in egestas est.</p>
            
        </body>
    </div>
  );
}

export default Home;