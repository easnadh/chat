import { AppBar, Button, Toolbar, Window, WindowHeader } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ReactElement, useState } from 'react';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif}') format('woff2');
        font-weight: 400;
        font-style: normal
    }

    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif_bold}') format('woff2');
        font-weight: bold;
        font-style: normal
    }

    body, input, select, textarea {
        font-family: 'ms_sans_serif', serif;
    }
`;

export const ThemeWrapper = ({ children }: { children: ReactElement }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        {open && (
          <Window className='w-9/10 h-9/10 mb-12'>
            <WindowHeader className='flex justify-between items-center'>
              <span>real-time chat</span>
              <Button onClick={() => setOpen(!open)}>
                <span>✖</span>
              </Button>
            </WindowHeader>
            <>{children}</>
          </Window>
        )}
        <AppBar className='fixed left-0' style={{ bottom: 0, top: 'auto' }}>
          <Toolbar>
            <div>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: 'bold' }}
              >
                <img
                  src='/logo.png'
                  alt=''
                  style={{ height: '20px', marginRight: 4 }}
                />
                Start
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
