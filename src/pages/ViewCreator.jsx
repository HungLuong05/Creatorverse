import Modal from 'react-modal';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './ViewCreator.module.css';

export default function ViewCreator(props) {
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

    const closeModal = () => {
        window.location = "/";
    };

    const process = (url) => {
      if (url) {
          return url.split('/')[3];
      } else {
          return '';
      }
  }

    return (
      <Modal
        isOpen={true}
        onReqestClose={closeModal}
        contentLabel="Creator Information"
        className={styles.modal}
      >
        <Link to={'/'} className={styles.close}>
          <FontAwesomeIcon icon={faCircleXmark} size="xl"/>
        </Link>
        <h2>{name}</h2>
        <img src={creatorData["Image"]}></img>
        <div className={styles.social_media}>
            <FontAwesomeIcon className={styles.icon_social_media} icon={faInstagram}/><a href={creatorData["Instagram"]}><h4>{process(creatorData["Instagram"])}</h4></a>
        </div>
        <p>Description: {creatorData["Description"]}</p>
      </Modal>
    )
}