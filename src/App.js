import Course from './Course';
import './App.css';
import { useState } from 'react';

function getRandomCourse(){
  const courseArray= ['Angular','Bootstrap','Ccsharp','Kompleweb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {

  const [courses,setCourse] = useState([]); 

  const handleClick = () => {
    setCourse([...courses,getRandomCourse()]) // önceki veriyi silmeyip yanına yeni ekliyor ... verinin silinmemesini sağlıyor.
  }

  const courseList =  courses.map((course,index)=>{
      return <Course key={index} courseName={course}/>
  });

  return (
    <div className="App">
      <button onClick={handleClick} className="appButton"> Kurs Ekle </button>
      <div className='courseList'>
        {courseList}
      </div>
    </div>
  );
}

export default App;
