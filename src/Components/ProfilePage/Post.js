import React from 'react';
import {useState, useEffect} from 'react';
import noprofile from './noprofile.png';

const postStyle = {
    width: '293px',
    height: '293px',
    marginLeft: '25px',
    marginTop: '25px',
    marginRight: '0',
    position: 'relative',
    cursor: 'pointer'
}

const postImgStyle ={
    width: '293px',
    height: '293px',
}

const coverStyle = {
    position: 'absolute',
    zIndex: '3',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    bottom :'0',
    visibility: 'hidden'
}

const coverVisibleStyle = {
    position: 'absolute',
    zIndex: '2',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    bottom :'0',
}

const coverTextStyle = {
    fontFamily: 'Roboto',
    color: 'white',
    marginTop: '30%',
}

const Post = ({userid, post}) => {

    const [shown, setIsShown] = useState(coverStyle);

    const handleOnHover = () => {
        setIsShown(coverVisibleStyle);
    };

    const handleHoverDown = () => {
        setIsShown(coverStyle);
    }

    const handlePostRedirect = () => {
        window.location.assign('/post/'+post._id);
    };

    return(
        <div style={postStyle} onClick={handlePostRedirect}
            key={post._id}
                        onMouseEnter={handleOnHover}
                        onMouseLeave={handleHoverDown}>
                <img src={'http://localhost:3000/public/users/'+userid+'/posts/'+post._id+'.png'} alt={noprofile} srcset="" style={postImgStyle} />
                <div style={shown}>
                    <div>7
                        <h3 style={coverTextStyle}>
                            Like: {post.likes}
                        </h3>
                        
                    </div>
                </div>
        </div>
    );   
}

export default Post;