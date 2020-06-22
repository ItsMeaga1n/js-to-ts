import React from "react";
import Js2Ts from "./components/js2Ts/Js2Ts";
import { GlobalStyle } from "./components/globalStyles/globalStyles";
const emptyFn = () => undefined;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: new Array(88).fill([]),
    };
  }
  getNotes() {
    return this.state.notes;
  }

  handleNoteClicked(event, noteNumber, sixteenthNumber) {
    const newNotes = JSON.parse(JSON.stringify(this.state.notes));
    newNotes[noteNumber].push({
      length: 4,
      sixteenthNumber: sixteenthNumber,
    });
    this.setState({
      notes: newNotes,
    });
  }

  render() {
    return (
      <div className="main">
        <GlobalStyle />
        <h1>{"Js -> Ts"}</h1>
        <Js2Ts
          bitsNumber={8}
          onNoteClick={this.handleNoteClicked.bind(this)}
          notes={this.getNotes()}
          onScroll={emptyFn}
          onDown={emptyFn}
          onUp={emptyFn}
        />
      </div>
    );
  }
}

export default App;
