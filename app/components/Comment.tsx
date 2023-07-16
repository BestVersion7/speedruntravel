import { formatDate } from "../utils/formatDate";
import Image from "next/image";

const Comment = (props) => {
    const newDate = formatDate(props.comment_date);

    return (
        <div className="comment-body">
            <div>
                <Image
                    className="comment-body-image"
                    height={50}
                    width={50}
                    src={props.comment_user_image}
                    alt={props.comment_user_name}
                />
            </div>
            <div className="comment-body-text">
                <div>
                    <b>{props.comment_user_name}</b>{" "}
                    <span style={{ color: "darkgray" }}>{newDate}</span>
                </div>
                <div> {props.comment_body}</div>
            </div>
            <br />
        </div>
    );
};

export default Comment;
