import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const divStyle = {
    width: "340px",
    height: "120px",
    margin: "20px auto 0 5px",
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'grey',
    textAlign: 'center'
}

const textStyle = {
    fontFamily: 'Roboto'
}

const buttondStyle = {
    margin: "30px auto auto auto",
    display: "block"
}

const LoginRedirect = () => {
    return(
        <div style={divStyle}>
            <h3 style={textStyle}>Don't have an acoount ?</h3>
            <Link to="/signup">
                <Button style={buttondStyle} variant="contained" color="primary">
                    Signup Page
                </Button>
            </Link>
        </div>
    )
}

export default LoginRedirect;