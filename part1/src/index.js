import React from 'react';
import ReactDOM from 'react-dom';
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const Total = (props) => {
  return (
    <p>Total of exercises {props.exercises0 + props.exercises1 + props.exercises2}</p>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>{props.name0} {props.exercises0}</p>
      <p>{props.name1} {props.exercises1}</p>
      <p>{props.name2} {props.exercises2}</p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];
  return (
    <div>
      <Header course={course} />
      <Content name0={parts[0].name} name1={parts[1].name} name2={parts[2].name} exercises0={parts[0].exercises} exercises1={parts[1].exercises} exercises2={parts[2].exercises} />
      <Total exercises0={parts[0].exercises} exercises1={parts[1].exercises} exercises2={parts[2].exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));