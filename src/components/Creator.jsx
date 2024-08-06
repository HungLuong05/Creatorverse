import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import supabase from '../client.js';
import styles from './Creator.module.css';

export default function Creator(props) {
    const handleDelete = async (event) => {
        event.preventDefault();

        console.log('delete');
        const response = await supabase.from('creators').delete().eq('name', props.name);

        if (response.error) {
            console.error('Error adding creator:', response.error);
        }
    }

    const process = (url) => {
        if (url) {
            return url.split('/')[3];
        } else {
            return '';
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.creator_picture}>
                <img src={props.imageURL}></img>
                <h2>{props.name}</h2>
            </div>
            <div className={styles.creator_info}>
                <FontAwesomeIcon className={styles.icon_social_media} icon={faInstagram}/><a href={props.url}><h4>{process(props.url)}</h4></a>
            </div>
            <a href={`/edit/${props.name}`}>
                <i className={`${styles.icon} ${styles.edit}`}>
                    <FontAwesomeIcon icon={faPenToSquare}/>
                </i>
            </a>
            <a href='/'>
                <i className={`${styles.icon} ${styles.delete}`} onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash}/>
                </i>
            </a>
            <Link to={`/view/${props.name}`}>
                <i className={`${styles.icon} ${styles.info}`}>
                    <FontAwesomeIcon icon={faCircleInfo}/>
                </i>
            </Link>
        </div>
    )
}