import React, {Component} from 'react';
import _ from 'lodash';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.eventClick = this.eventClick.bind(this);
  }

  eventClick(e){
    this.props.checkCard(this.props.info);
  }

   render() {
     return(
       <div className = "card col-md-4" >
        <div className = "card-block" onClick = {this.eventClick}>
          <image className = "card-img-top" src = {""} />
          <div>
            {
              this.props.info.matched ?
              <p>this is value of cards: {this.props.info.value}</p>
              :
              <p>""</p>
            }
          </div>
        </div>
       </div>
     )
   }
}
