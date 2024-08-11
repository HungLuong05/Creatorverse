import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import supabase from '../client.js';
import styles from './EditCreator.module.css';

export default function EditCreator(props) {
  const { name } = useParams();

  const [creatorData, setCreatorData] = useState({
    Name: '',
    Image: '',
    Description: '',
    Instagram: '',
  });

  useEffect(() => {
    console.log(name);
    const element = props.data.find(item => item.name === name);
    if (element) {
        setCreatorData({
            Name: element.name,
            Image: element.imageURL,
            Description: element.description,
            Instagram: element.url,
        })
     }
  }, [props])

  const handleChange = (event) => {
    setCreatorData({
        ...creatorData,
        [event.target.name]: event.target.value
    })
  }

  const validateInputs = () => {
    const values = Object.values(creatorData);
    for (let value of values) {
      if (value.includes('?')) {
        alert("The '?' character is not allowed.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateInputs()) {
       alert("The '?' character is not allowed."); 
    }

    console.log(creatorData);
    console.log(creatorData["Name"])
    const data = {
        name: creatorData["Name"],
        imageURL: creatorData["Image"],
        description: creatorData["Description"],
        url: creatorData["Instagram"],
    }

    const response = await supabase.from('creators').update([data]).eq('name', name);
    console.log(response);
    if (response.error) {
        console.error('Error adding creator:', response.error);
    } else {
        window.location = "/";
    }
  }

  return (
      <div>
          <form className={styles.container} onSubmit={handleSubmit}>
              <label className={styles.form}>
                  <p>Name</p>
                  <input name="Name" id="Name" type="text" required readOnly={false} value={creatorData.Name} onChange={handleChange}></input>
              </label>
              <label className={styles.form}>
                  <p>Image (Optional)</p>
                  <input name="Image" id="Image" type="text" value={creatorData.Image} onChange={handleChange}/>
              </label>
              <label className={styles.form}>
                  <p>Description</p>
                  <input name="Description" id="Description" type="text" required value={creatorData.Description} onChange={handleChange}/>
              </label>
              <p className={styles.socialMediaHeader}>Social media links</p>
              <label className={styles.form}>
                    <p>Instagram</p>
                    <input name="Instagram" id="Instagram" type="text" value={creatorData.Instagram} onChange={handleChange}/>
                    {/* <p>X</p>
                    <input name="X" id="X" type="text"/>
                    <p>YouTube</p>
                    <input name="YouTube" id="YouTube" type="text"/> */}
                </label>
              <input type="submit" value="Submit"/>
          </form>
      </div>
  )
}