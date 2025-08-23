import React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

// For React 19 compatibility
declare module 'react/jsx-runtime' {
  export default any
  export const jsx: any
  export const jsxs: any
} 