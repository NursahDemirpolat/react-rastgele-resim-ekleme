import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'
import "./Course.css";

const courseMap = {
    Angular:Angular,
    Bootstrap,
    Ccsharp,
    Kompleweb, //key ve value aynı isimse : yapmak zorunluluğu yok
}

function Course ({courseName}) {
    console.log(courseName);
    console.log(courseMap[courseName]);
    return (  
        <div className="courseDiv">
            <img className='courseimg' src={courseMap[courseName]} alt={courseName} />
        </div>
    );
}

export default Course;