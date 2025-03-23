import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from '../store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import {
  persistStore,
} from 'redux-persist'

const persistor = persistStore(store);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>,
)
