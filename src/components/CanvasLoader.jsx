import React from 'react'
import {Html, useProgress} from '@react-three/drei'
const CanvasLoader = () => {
  return (
    <Html
    as='div'
    center
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
    <span className="canvas-loader"></span>
    <p stle={{fontSize: 14, color: reduceVertices, fontWeight: 800, marginTop: 40}}>
        {progress!=0 ? `${progress.toFixed(2)}%`: 'Loading...'}
    </p>
    </Html>
  )
}

export default CanvasLoader
