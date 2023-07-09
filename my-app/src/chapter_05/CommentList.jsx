import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "안녕하세요, 유재석입니다.",
    },
    {
        name: "강민경",
        comment: "안녕하세요, 강민경입니다.",
    },
    {
        name: "의자",
        comment: "안녕하세요, 의자입니다.",
    },
];

function CommentList(props) {
    return(
        <div>
            {/* props추가하기 */}
            {/* 
            //Comment 컴포넌트 반영
            <Comment name={"이인제"} comment={"안녕하세요, 소플입니다."}/>
            <Comment name={"유재석"} comment={"리액트리액트"}/> 
            */}

            {/*Comment 데이터를 별도의 객체로 분리하여 동적으로 반영*/}
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                    
                );
            })}
        </div>
    )
}

export default CommentList;