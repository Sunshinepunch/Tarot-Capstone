import React, { Component } from 'react'
import ResizeImage from 'react-resize-image'

class cardBack extends Component {
  render () {
    return (
      <ResizeImage

    )
  }
}



 
class componentName extends Component {
  render () {
    return (
      <ResizeImage
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg?height=50%25"
        alt="Tsunami bt hokusai"
        options={{ width: 200 }}
      />
    )
  }
}
 
export default componentName