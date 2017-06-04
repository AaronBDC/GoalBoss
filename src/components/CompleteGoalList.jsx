import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';
import { setCompleted, clearACompleted } from '../actions';



class CompleteGoalList extends Component{
  componentDidMount(){
    completeGoalRef.on('value', snap => {
      let completeGoals =[];
      snap.forEach(completeGoal =>{
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title})
      })
      console.log('completeGoals', completeGoals);
      this.props.setCompleted(completeGoals);
    })
  }
  clearCompleted(){
    completeGoalRef.set([]);
  }
  clearACompleted(){
//    const{email } = this.props.user;
    const{title, index} = this.props.goal;
    completeGoalRef.child(index).remove();

  }
  render(){
    //const {email, title} = this.props.goal;
    return(
      <div>
      {
          this.props.completeGoals.map((completeGoal, index) => {
            const {title, email } = completeGoal;
            return(
              <div key={index}>
                <em>{title}</em> done by <strong>{email}</strong>
                <button
                  className="btn btn-sm btn-warning"
                  //onClick={() => this.clearACompleted()}
                >
                  Clear
                </button>
              </div>
            )
          })
      }
      <button
        className="btn btn-primary"
        onClick={()=> this.clearCompleted()}
        >
          Clear All
      </button>
      </div>
    )

  }
}
function mapStateToProps(state){
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
