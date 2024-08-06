import styles from './ShowCreators.module.css';
import Creator from '../components/Creator.jsx';
import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react';

export default function ShowCreators(props) {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        setCreators(props.data);
    }, [props])

    return (

        <div className={styles.creators_all}>
            {
                creators.map((creator, index) =>
                    <Creator imageURL={creator.imageURL} name={creator.name} description={creator.description} url={creator.url} key={index}/>
                )
            }
        </div>
    )
}