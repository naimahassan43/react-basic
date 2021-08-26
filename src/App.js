/****** Class Based Component ********/
// import React from "react";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <p> Hello!!!!!!!!</p>
//       </div>
//     );
//   }
// }

// export default App;

/****** Function Based Component ********/

// import React from "react";
// const App = () => {
//   return (
//     <div>
//       <h1> Hello From Functional Component!!!!!!!!</h1>
//     </div>
//   );
// };

// export default App;

/****** JSX Rules ********/
// import React from "react";
// const App = () => {
//   const country = "Bangladesh";
//   const num1 = 2999;
//   const num2 = -99;
//   return (
//     <React.Fragment>
//       <div className="cont">
//         <h1> Hello From {country}!!!!</h1>
//         <h2> {num1 - num2}</h2>
//         <h3>{num2 > 0 ? "Positive" : "Negative"}</h3>
//       </div>
//       <br />
//       <hr />
//       <form>
//         <label htmlFor="country">Country : </label>

//         <input type="text" name="country" />
//       </form>
//     </React.Fragment>
//   );
// };

// export default App;

/****** React functional Components (Reusability) ********/

import React from "react";
import Person from "./components/Person/Person";

const App = () => {
  return (
    <>
      <Person name="John" country="Germany" />
      <Person name="Smith" country="Belarush" />
    </>
  );
};

export default App;
