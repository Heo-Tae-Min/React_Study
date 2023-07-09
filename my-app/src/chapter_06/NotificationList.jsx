import React from "react";
import Notification from "./Notification";

const reserveNoti = [
    {
        id: 1, 
        message: "안녕하세요, 오늘일정입니다.",
    },
    {
        id: 2, 
        message: "점심시간입니다.",
    },
    {
        id: 3, 
        message: "곧 미팅입니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);

        //초기화
        this.state = {
            notifications: [],
        };
    }

    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reserveNoti.length) {
                const index = notifications.length;
                notifications.push(reserveNoti[index]);

                //state업데이트
                this.setState({
                    notifications: notifications,
                });
            }else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 2000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notifications) => {
                    return (
                        <Notification
                            key = {notifications.id}    //구분을 위한 id
                            id = {notifications.id}
                            message = {notifications.message} 
                        />
                    )
                })}
            </div>
        );
    }
}
export default NotificationList;