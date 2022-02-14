import {Component} from 'react'

class RenderImage extends Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.alternativeText}></img>
    )
  }
}

export default RenderImage;
