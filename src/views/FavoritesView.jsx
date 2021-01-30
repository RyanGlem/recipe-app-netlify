import React from 'react'
import {Spinner, Button} from 'react-bootstrap'


export const FavoritesView = props => {

    return (
        <div>
            <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading Favorites...
  </Button>
        </div>
    )

}

export default FavoritesView