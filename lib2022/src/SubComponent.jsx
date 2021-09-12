import React, { Component } from 'react'
import { TextInput, Button } from 'react-native'
export default class SubComponent extends Component {
    constrator(props) {
        super(props);
        this.state = { Num1: 0, Num2: 0 };
    }
    sum = () => {
        var N1 = parseInt(this.state.Num1);
        var N2 = parseInt(this.state.Num2);
        var R = N1 + N2;
        alert(R);
    }
    render() {
        return (
            <div>
                    <TextInput style={{ borderwidth: 1, margin: 10 }} placeholder="Num1" onchangeText={Num1 => this.setState({ Num1 })} />
                    <TextInput style={{ borderwidth: 1, margin: 10 }} placeholder="Num2" onchangeText={Num2 => this.setState({ Num2 })} />
                    <Button title="Sum" onPress={this.sum} />
            </div>
        )
    }
}
