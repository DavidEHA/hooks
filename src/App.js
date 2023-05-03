import "./App.css";
// import HooksRules from './examples/HooksRules';
// import UseStateHook from './examples/UseStateHook'
// import UseEffectHook from './examples/UseEffectHook';
// import UseLayoutEffectHook from './examples/UseLayoutEffectHook'
// import UseMemoHook from './examples/UseMemoHook';
// import UseCallBackHook from './examples/UseCallBackHook';
// import UseContextHook from './examples/UseContextHook';
// import UseRefHook from "./examples/UseRefHook";
import UseReducerHook from "./examples/UseReducerHook";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        {/* <HooksRules/> */}
        {/* <UseStateHook/> */}
        {/* <UseEffectHook/> */}
        {/* <UseLayoutEffectHook/> */}
        {/* <UseMemoHook/> */}
        {/* <UseCallBackHook/> */}
        {/* <UseContextHook/> */}
        {/* <UseRefHook /> */}
        <UseReducerHook/>
      </header>
    </div>
  );
};

export default App;
