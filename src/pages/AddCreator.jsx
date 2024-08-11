import supabase from '../client.js';
import styles from './AddCreator.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddCreator() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        console.log(formData);
        const data = {
            name: formData.get('Name'),
            imageURL: formData.get('Image'),
            description: formData.get('Description'),
            url: formData.get('Instagram'),
        }

        const response = await supabase.from('creators').insert([data]);
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
                    <input name="Name" id="Name" type="text" required/>
                </label>
                <label className={styles.form}>
                    <p>Image</p>
                    <input name="Image" id="Image" type="text"/>
                </label>
                <label className={styles.form}>
                    <p>Description</p>
                    <input name="Description" id="Description" type="text" required/>
                </label>
                <p className={styles.socialMediaHeader}>Social media links</p>
                <label className={styles.form}>
                    <p>Instagram</p>
                    <input name="Instagram" id="Instagram" type="text"/>
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