import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Todocontainer from "./components/Todocontainer"; 


function App() {
  // all states goes here
  // state syntax
/*
*const [value, setValue] = useState(initialValue);
*value: cirrent state value(variable)
*setValue: function to update the state
*initialValue: initial value of the state
*useState is a react hook that allows you to add state to functional components
*useState is imported from react
*/
  const appTitle = "My To do list";
  return (
    <div>
      <Header htitle={appTitle} />
      {/* <Main mtitle={appTitle} /> */}
      <Todocontainer />
      <Footer ftitle={appTitle} />
    </div>
  );
}

export default App;
