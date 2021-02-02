import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import AlbumsPopup from './AlbumsPopup';
import '../styles/Albums.css';


const Albums = () => {
  const [truthy, setTruthy] = useState(false)
  const [isDone, setIsDone] = useState(false);
  const { albums } = useSelector((store) => store.albumsReducer)
  const length = albums.length

  const addAlbum = () => {
    return (
      albums.map((albums) => {
        const { name, year, image, artist } = albums

        return (
          <tbody>
            <tr className='tableColor' style={{ textDecoration: isDone ? "line-through" : "none" }}>
              <td>{name}</td>
              <td>{year}</td>
              <td><img src={image} alt="albumImage" id="img" className='imageStyle' /></td>
              <td>{artist}</td>
            </tr>
          </tbody>
        )
      })
    )
  }

  const click = (e) => {
    setTruthy(!truthy);
  }

   function handleClick() {
          setIsDone((prevValue) => {
            return !prevValue;
          });
        }

  return (
    <div className='firstStyle'>
      <h1 className='heading'>Albums</h1>
      {
        truthy ?
          <AlbumsPopup handleClick={click} />
          :
          <Table hover>
            <thead>
              <tr>
                <th colSpan="4">
                  <Button variant="outline-primary" onClick={click}>
                    + Add
                  </Button>
                  <span> </span>
                  <Button variant="outline-danger" onClick={handleClick}>
                    Delete
                  </Button>
                </th>
              </tr>
              <tr className='thStyle'>
                <th>Name</th>
                <th>Year</th>
                <th>Image</th>
                <th>Artist</th>
              </tr>
            </thead>
            {
              length > 0 ?
                addAlbum()
                :
                <h4 className='headingFour'>Albums List is empty!</h4>
            }
          </Table>
      }
    </div>
  )
}

export default Albums
