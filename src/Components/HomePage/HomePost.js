import { Link } from "react-router-dom";

import LikeComment from "./LikeComment";

const imgStyle={
    width: '520px',
}

const divStyle={
    textAlign: 'center',
    marginTop: '60px',
    width: '520px',
    margin: '50px auto 50px auto',
    border: 'solid',
    borderWidth: '1.2px',
    borderColor: 'lightgrey',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid'
}

const profileDiv = {
    height: '50px',
    width: '100%',
    display: 'flex'
}

const nameParDiv = {
    display: 'flex'
}

const profileIcon = {
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: 'auto'
}

const textDivStyle = {
    margin: '-10px 0 50px 15px'
}

const textStyle = {
    fontFamily: 'Roboto',
    fontSize: '15px'
}

const linkStyle = {
    color: 'black',
    style: 'none',
    textDecoration: 'none'
}

const linkUserStyle = {
    color: 'black',
    style: 'none',
    textDecoration: 'none',
    margin: '-20px 0 0 18px'
}

const paragraphStyle = {
    fontFamily: 'Roboto',
    fontSize: '15px',
    margin: '5px 0 0 15px'
}

const HomePost = ({post, userid}) => {
    return(
        <div style={divStyle}>
            <div style={profileDiv}>
                <div>
                    <Link to={"/user/"+post.owner.username}>
                    <img src={'http://localhost:3000/public/users/'+post.owner._id+'/profile/profile.png'} alt="" srcset="" style={profileIcon}/>
                    </Link>
                </div>
                <div style={textDivStyle}>
                    <Link to={"/user/"+post.owner.username} style={linkStyle}>
                    <h5 style={textStyle}>
                        {post.owner.username}
                    </h5>
                    </Link>
                </div>
            </div>
            <img src={"http://localhost:3000/"+post.photo+'.png'} alt="" srcset="" style={imgStyle}/>
            <LikeComment post={post} userid={userid}/>
            <div style={nameParDiv}>
                <Link to={"/user/"+post.owner.username} style={linkUserStyle}>
                    <h5 style={textStyle}>
                        {post.owner.username}
                    </h5>
                </Link>
                <p style={paragraphStyle}>
                    {post.paragraph}
                </p>
            </div>
        </div>
    );
}

export default HomePost;