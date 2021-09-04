import React from "react";

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        // これがState
        // JavaScriptのオブジェクトとして登録する
        this.state = {
        counter: 1,
        };
    }

    click = () => {
    // ClickされたらStateのカウンタをインクリメント
        this.setState({
        counter: this.state.counter + 1,
        });
    };

    constructWord = (number, word) => {
        let words = "";
        for (let counter = 0; counter < number; counter++) {
        words += word + "!".repeat(counter + 1) + " ";
        }
    return words.trimEnd();
    };
    
    // インラインスタイル
    mystyle = {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
    };

    render() {
        return (
        <div style={this.mystyle}>
            {/* ボタンをクリックされたらclick()メソッドが発火し、Stateが更新される */}
            <button onClick={this.click} style={{ "min-width": "75px" }}>
                Click me!!
            </button>
            {/* Stateのカウンタの数だけ叫ぶ */}
            <p>{this.constructWord(this.state.counter, this.props.word)}</p>
        </div>
        );
    }
}
