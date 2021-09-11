import React from 'react';
import { Link } from "react-router-dom";

const divStyle = {
    display: 'flex',
    height: '28px',
    textAlign: 'left',
    margin: '0 0 0 0'
}

const thinFont = {
    fontWeight: '200',
    margin: '2px 0 0 18px'
}

const hardFont ={
    margin: '2px 0 0 18px'
}

const linkStyle = {
    color: 'black',
    style: 'none',
    textDecoration: 'none'
}

const CommentDiv = ({comment}) => {
    return(
        <div style={divStyle}>
            <h4 style={hardFont}>
                <Link to={"/user/"+comment.owner.username} style={linkStyle}>
                {comment.owner.username}
                </Link>
            </h4>
            <h4 style={thinFont}>
                {comment.paragraph}
            </h4>
        </div>
    );
}

export default CommentDiv;