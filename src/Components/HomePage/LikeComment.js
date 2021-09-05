import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const divStyle = {
    textAlign: 'left'
}

const buttonDivStyle = {
    margin: '0 0 0 5px',
    display: 'flex'
}

const linkStyle = {
    color: 'black',
    margin: '0 0 0 10px'
}

const textStyle = {
    margin: '10px 0 5px 12px',
    fontFamily: 'Roboto'
}

const LikeComment = () => {

    const handleCick = () => {

    };

    return(
        <div style={divStyle}>
            <div style={buttonDivStyle} onClick={handleCick}>
                <Link style={linkStyle}>
                    <FavoriteBorderIcon fontSize="large"/>
                </Link>
                <Link style={linkStyle}>
                    <ChatBubbleOutlineIcon fontSize="large"/>
                </Link>
            </div>
            <div style={buttonDivStyle}>
                <h4 style={textStyle}>25 likes</h4>
            </div>  
        </div>
    );
}

export default LikeComment;