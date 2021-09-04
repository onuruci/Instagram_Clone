
const imgStyle={
    width: '520px',
}

const divStyle={
    textAlign: 'center',
    marginTop: '60px',
    width: '520px',
    margin: '50px auto 0 auto',
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

const profileIcon = {
    width: '40px',
    height: '40px',
    borderRadius: '100%',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: 'auto'
}

const HomePost = ({postid, userid}) => {
    return(
        <div style={divStyle}>
            <div style={profileDiv}>
                <div>
                    <img src={'http://localhost:3000/public/users/'+userid+'/profile/profile.png'} alt="" srcset="" style={profileIcon}/>
                </div>
                <h3>{}</h3>
            </div>
            <img src={"http://localhost:3000/public/users/"+userid+'/posts/'+postid+'.png'} alt="" srcset="" style={imgStyle}/>
        </div>
    );
}

export default HomePost;