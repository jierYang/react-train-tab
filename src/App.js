import React, {Component} from 'react';
import './App.css';
import Tab from "./Tab";

class App extends Component {
    render(){
        return(
            <div className={"tabStyle"}>
                <Tab defaultCurrent='0'>
                    <div name='1'>
                        <div><span>我是第一个</span><span>1</span></div>
                    </div>
                    <div name="2">
                        <div><span>我是第二个</span><span>2</span></div>
                    </div>
                    <div name="3">
                        <div><span>我是第三个</span><span>3</span></div>
                    </div>

                </Tab>
            </div>
        )
    }
}

export default App;
