import React from "react";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNummber: 0,
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
    };
  }

  jumpTo(step) {
    this.setState({
      stepNummber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i){
      const 
  }
}
