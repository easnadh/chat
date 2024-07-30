import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeWrapper } from './components/templates/ThemeWrapper.tsx';
import { Home } from './components/pages/Home.tsx';
import { Login } from './components/pages/Login.tsx';

function App() {
  const user = false;

  return (
    <>
      <ThemeWrapper>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            {user ? <Home /> : <Login />}
          </Suspense>
        </BrowserRouter>
      </ThemeWrapper>
    </>
  );
}

export default App;
