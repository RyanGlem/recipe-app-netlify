import React from 'react'
import {Table, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


export const ProfileView = props => {

    const { isLoggedIn, user: { username, firstName, lastName, email, skill }} = useSelector(({ isLoggedIn, user }) => ({ isLoggedIn, user }))

    return isLoggedIn ? (

        <div>
            <Container>
                <Row>
            <Col>
            <img src ="https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg" alt=""></img>
            </Col>
            <Col>
                    <div> {`Username: ${username}`}  </div>
              
                     <div> Skill Level </div>
               
                   <div> Bio: </div>
               
            </Col>
            </Row>
        
        </Container>
        </div>
    ) : <Redirect to="/home" />

}

export default ProfileView