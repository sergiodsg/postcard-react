import React from "react";

const PostcardBodyRight = () => {
    return( <div class="body-right">
                <label for="name">
                    <input type="text" placeholder="Some Name" />
                </label>
                <label for="email">
                    <input type="text" placeholder="Some email" />
                </label>
                <label for="comment">
                    <input type="text" placeholder="Some comment" />
                </label>
            </div>);
}

export default PostcardBodyRight;