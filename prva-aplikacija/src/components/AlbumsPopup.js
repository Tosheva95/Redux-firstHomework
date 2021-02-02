import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Form, Button, Modal } from 'react-bootstrap'
import { addAlbum } from '../redux/albums/albums.js'

const AlbumsPopup = ({ handleClick }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [artist, setArtist] = useState('');

  const saveAlbum = (e) => {
    dispatch(addAlbum(name, year, image, artist))
    setName("")
    setYear("")
    setImage("")
    setArtist("")
  }

  const img = (e) => {
    const imgReader = new FileReader();
    imgReader.onload = () => {
      if (imgReader.readyState === 2) {
        setImage(imgReader.result)
      }
    }
    imgReader.readAsDataURL(e.target.files[0])
  };

  const saveData = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value)
    } else if (name === 'year') {
      setYear(value)
    } else if (name === 'image') {
      setImage(value)
    } else if (name === 'artist') {
      setArtist(value)
    }
  }

  return (
    <div>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Album details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name='name'
            value={name}
            onChange={saveData}
          />
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            name='year'
            value={year}
            onChange={saveData}
          />
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            name='artist'
            value={artist}
            onChange={saveData}
          />
          <Form.File
            type="file"
            name="image"
            onChange={img}
            style={{ marginTop: '15px' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            type="submit"
            onClick={(e) => { saveAlbum(e); handleClick(e) }}
          >
            Save
          </Button>
          <Button
            variant="outline-danger"
            type="submit"
            onClick={handleClick}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default AlbumsPopup