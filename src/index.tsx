import React from 'react'

import ReactDOM from 'react-dom/client'

import App from '@presentation/App'

console.log('before')
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
console.log('after')
