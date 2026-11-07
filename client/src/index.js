import ReactDOM from 'react-dom/client';
import App from './App';
import { StyleSheetManager } from 'styled-components';
import ContexteProvider from './Contexte';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContexteProvider>
    <StyleSheetManager>
      <App />
      <GlobalStyles />
    </StyleSheetManager>
  </ContexteProvider>
);