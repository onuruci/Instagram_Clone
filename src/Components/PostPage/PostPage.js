import React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect, useParams } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import NavBar from '../Nav/NavBar';

import { PostWrapper, ImageWrapper, CommentsWrapper, ImgDiv} from './ScPostPage';
import CommentDiv from '../HomePage/Comment';


const axios = require('axios');

const loadingDivStyle = {
    width: '100%',
    textAlign: 'center'
}

const loaderStyle = {
    margin: '400px 0 0 0'
}


const PostPage = ({currentUserId,setCurrentUserId,currentUserName,setCurrentUserName}) => {

    const { id } = useParams();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [componentLoading, setComponentLoading] = useState(0);
    const [auth, setAuth] = useState(1);
    const [err, setErr] = useState(0);
    const [noPost, setNoPost] = useState(0);
    const [userid, setUserId] = useState('');
    const [photo, setPhoto] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let res = await axios.get('http://localhost:3000/main-page',{
                'headers' : {
                    'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            });
            if(res.data.err === 1){
                setErr(1);
            }
        }

        const getPost = async () => {
            let res = await axios.get('http://localhost:3000/postDetail/' + id,{
                'headers' : {
                    'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            });

            if(res.data.post === null){
                setNoPost(1);
            }
            else {
                console.log(res.data);
                setCurrentUserId(res.data.authData.user._id);
                setUserId(res.data.post.owner._id);
                setPhoto(res.data.post.photo);
                setComments([...res.data.post.comments]);
                console.log(res.data.post);
                console.log(res.data.post.comments);
            }
        }

        if(localStorage.getItem('token')){
            console.log('tokenexists');
            getData();
            if(err === 1){
                setAuth(0);
                setComponentLoading(1);
            }
            else{
                setAuth(1);
                getPost().then(() => {
                     setComponentLoading(1);
                     console.log('comments', comments);
                 });
            }
        }
        else {
            setAuth(0);
            setComponentLoading(1);
        }
    }, []);

    if(componentLoading === 0){
        return(
            <div style={loadingDivStyle}>
                <CircularProgress style={loaderStyle}/>
            </div>
        );
    }

    return(
        <div>
            <NavBar
            currentUserId={currentUserId}
            currentUserName={currentUserName}
            setAuth={setAuth}/>
            <PostWrapper>
                <ImageWrapper>
                    <ImgDiv src={'http://localhost:3000/'+photo+'.png'} srcset="" />
                </ImageWrapper>
                <CommentsWrapper>
                    {comments.map(comment => {
                        return <CommentDiv
                        key={comment._id}
                        comment ={comment}
                        />;
                    })}
                </CommentsWrapper>
                {comments.map(comment => {
                        <CommentDiv
                        key={comment._id}
                        comment ={comment}
                        />
                    })}
            </PostWrapper>
            {auth === 1 ? null : <Redirect to='/'/>}
            {noPost === 0 ? null : <Redirect to='/home'/>}
        </div>
    );
};

export default PostPage;