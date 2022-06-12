import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./Pages/Home";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />

      <ToastContainer
       position="bottom-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
