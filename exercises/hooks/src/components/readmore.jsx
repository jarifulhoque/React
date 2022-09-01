import {useState} from 'react';

 const Readmore = ({text,maxLength}) => {
     const [hidden, setHidden] = useState(true);

     if(text.length <=maxLength){
         return <span>{text}</span>
     }

     return ( 
        <div className='Component'>
         <span>
             {hidden ? `${text.substr(0,maxLength).trim()}...` : text}

             {hidden ? (
                 <a onClick={() => setHidden(false)}>Read More</a>
             ) : (
                 <a onClick={() => setHidden(true)}>Read Less</a>
             )}
         </span>
        </div>
     );
 }

 export default Readmore;