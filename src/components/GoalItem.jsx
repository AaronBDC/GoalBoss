import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';
import { Glyphicon } from 'react-bootstrap';

class GoalItem extends Component{

  completeGoal(){
    // add to complete goals from the db
    // remove this goal from the goals reference
    const {email } = this.props.user;
    const {title, serverKey} = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title});
  }
  render(){
    const {email, title} = this.props.goal;
    return(

      <div style={{margin: '5px'}}>
        <Glyphicon glyph="glyphicon glyphicon-unchecked"></Glyphicon>

        <strong> {title}</strong>
        <span style={{marginRight: '5px'}}> added by <em>{email}</em>        <button
                  className="btn btn-sm btn-info"
                  onClick={() => this.completeGoal()}
                >
                  Complete
                </button></span>


      </div>
    )
  }
}
function mapStateToProps(state){
  const { user } = state;
  return{
    user
  }
}
//export default GoalItem;
export default connect(mapStateToProps, null)(GoalItem);
