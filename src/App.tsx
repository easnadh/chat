import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeWrapper } from './components/templates/ThemeWrapper.tsx';
import { Home } from './components/pages/Home.tsx';

function App() {
  return (
    <>
      <ThemeWrapper>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </BrowserRouter>
      </ThemeWrapper>
    </>
  );
}

export default App;
