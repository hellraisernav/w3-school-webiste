function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}
function MissedGoal() {
  return <h3>Missed!</h3>;
}

function MadeGoal() {
  return <h3>Goal!!!!</h3>;
}

export default Goal;
