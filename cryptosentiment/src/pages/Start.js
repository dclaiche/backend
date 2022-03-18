// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import ReactLoading from "react-loading";


// function Start({setData}) {
//     const [done, setDone] = useState(undefined);
//     const history = useHistory();

//     useEffect(() => {
//         setTimeout(() => {
//           fetch("https://restsent-app.herokuapp.com/load_sentiment", {Method: 'GET'})
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(json);
//           setData(json);
//           setDone(true);
//         });
//         }, 2000);
//       }, []);

//     const start = async () => {
//         history.push('/home')
//     }
    
//     return (
//         <>
//         {!done ? (
//             <>
//             <ReactLoading
//             type={"bars"}
//             color={"#03fc4e"}
//             height={100}
//             width={100}
//           />
//           <h1>Pre-Loading Sentiment</h1>
//           </>
//       ) : (
//         history.push('/home')
//       )}
        
//         </>
//     );
// }


// export default Start;

