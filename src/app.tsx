import React, {Component} from "react";
import Js2Ts from "./components/js2Ts/Js2Ts";
import { GlobalStyle } from "./components/globalStyles/globalStyles";
import { Note } from "Types";
const emptyFn = () => undefined;



interface AppState {
  notes: Note[][]
}

interface AppProps {
  title: Title
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
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
        <h1>{this.props.title.content}</h1>
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
