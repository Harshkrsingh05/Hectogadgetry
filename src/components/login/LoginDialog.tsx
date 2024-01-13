import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { authenticateSignup} from  '../../service/api';

const accountInitialValues = {
    login:{
        view:'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders,Wishlist and Recommendations'

    },
    signup:{
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}
const signupInitialValues ={
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}


function LoginDialog() {

    const [show, setShow] = useState(false);
    const [account, toggleAccount]=useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    
    const handleClose = () => {
        setShow(false);
        toggleAccount(accountInitialValues.login);
    }
    const handleShow = () => setShow(true);
    const loginButtonPadding={
        padding: '8px 118px 8px 131px',
        backgroundColor:'#FB641B',
        color:'#fff'
    };  
    const reqOtpButtonPadding={
        padding: '8px 105px 8px 94px',
        backgroundColor:'#fff',
        color:'#2874f0',
        boxShadow: '0 2px 4px 0 rgb(0 0 0/ 30%)'
    };  
    const loginbackground={
        backgroundColor: '#2874f0',
        backgroundImage: "url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png')",
        backgroundPosition: 'bottom ',
        backgroundSize:'85%',
        backgroundRepeat: 'no-repeat',
    }
    const toggleSignup=()=>{
        toggleAccount(accountInitialValues.signup);
    }
    const onInputChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignup({...signup, [e.target.name]:e.target.value});
        console.log(signup);
    }
    const signupUser=async()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>
            {/* <Row><Col sm={4}></Col><Col sm={8}></Col></Row> */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >   <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalLogin">
                            <Col sm={4} style={loginbackground}>
                                <Form.Text className="text" style={{color: '#ffffff',fontWeight:'500'}}><h5>{account.heading}</h5>
                                    <br /><p>{account.subHeading}</p></Form.Text>
                            </Col>
                            {
                            account.view === 'login'?<Col sm={8}> 
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Enter Email/Mobile number"
                                    className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Enter Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Text className="text">
                                        By continuing,you agree to Hectogadgetry Terms of use and Privacy Policy.
                                    </Form.Text><br />
                                    <Button  style={loginButtonPadding}>Login</Button>
                                    <p className="text-center"style={{paddingTop: 8}}>OR</p>
                                    <Button  style={reqOtpButtonPadding}>Request OTP</Button>
                                    <br /><br/>
                                    <p style={{color: "#2874f0", cursor: "pointer"}} className="text-decoration-none py-2" onClick={() => toggleSignup()}>New to HectoGadgetry? Create an account</p>
                                </Form.Group>
                            </Col>
                            :
                            <Col sm={8}> 
                                <FloatingLabel controlId="floatingTextarea" label="Enter firstname" className="mb-3">
                                    <Form.Control onChange={onInputChange} name='firstname' type="text" placeholder="Jai shree ram" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingTextarea" label="Lastname" className="mb-3">
                                    <Form.Control onChange={onInputChange} name='lastname' type="text" placeholder="lastnsme" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Enter username" className="mb-3">
                                    <Form.Control onChange={onInputChange} name='username' type="text" placeholder="lakshman123" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Enter Email" className="mb-3">
                                    <Form.Control onChange={onInputChange} name='email' type="email" placeholder="abc@email.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Enter Password" className="mb-3">
                                    <Form.Control onChange={onInputChange} name='password' type="password" placeholder="Password" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Enter Phone" className="mb-3">
                                    <Form.Control onChange={onInputChange} name='phone' type="number" placeholder="123455567" />
                                </FloatingLabel>
                                <Button onClick={()=>signupUser()} style={loginButtonPadding}>Continue</Button>
                            </Col>}
                            
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginDialog;