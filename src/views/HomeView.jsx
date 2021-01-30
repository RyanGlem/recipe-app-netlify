import React from 'react'
import {Container, Image, Carousel} from 'react-bootstrap'


export const HomeView = props => {

    return (
      <div>
        {/* <UsersView users={this.props.users} key={this.props.id} /> */}
        <h3>Welcome</h3>
        <Container>
        <Carousel>
        <Carousel.Item>
          <Image rounded
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=350:*"

          ></Image>
          </Carousel.Item>
          <Carousel.Item>
          <Image rounded
            src="https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"
            width ="350"
            height="350"
          ></Image>
          </Carousel.Item>
          <Carousel.Item>
          <Image rounded
            src="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_300,ar_1:1/k%2Farchive%2Fe3ce4eb1741bd76cc083424453c0e3f39d147f9b"
            width ="350"
            height="350"
          ></Image>
          </Carousel.Item>
          </Carousel>
          </Container>
      </div>
    )

}

export default HomeView