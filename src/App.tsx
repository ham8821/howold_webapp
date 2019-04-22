import * as React from 'react';
import Header from './Components/Header/Header';
import DropArea from './Components/DropArea/DropArea';
import Result from './Components/Result/Result';

interface IState {
  result:string
  filelength:number
}
    class App extends React.Component<{},IState> {
      public constructor(props:any){
        super(props)
        this.state = {
          filelength:0,
           result:""
        }
      }

      public resultstate = (resultString:string,filelen:any) => {
        this.setState({result:resultString,filelength:filelen})
      }

    public render() {
      return (
      <div>
        <Header />
        </div>
      );
    }
}

export default App;
