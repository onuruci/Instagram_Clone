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
            <h3 style={textStyle}>Already have an account ?</h3>
            <Button style={buttondStyle} variant="contained" color="primary">
                Login Page
            </Button>
        </div>
    )
}

export default LoginRedirect;