import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize :16,
    },
};

class Notification extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }
    
    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called.`);	//생성
    }
    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() called.`);	//업데이트
    }
    componentDiUnmount(){
        console.log(`${this.props.id} componentDiUnmount() called.`);	//사망
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}
export default Notification;