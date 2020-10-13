import React, { useEffect, useState } from "react";
import '../../../App.scss';
import './SeaCreature.scss';

// Components
import Grid from '../../grid/Grid';

// Axios
const axios = require('axios');

function SeaCreatures(props) {
    // States
    const [seaCreatures, setSeaCreatures] = useState([]);
    const [url] = useState("https://acnhapi.com/v1a/sea");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // On Load
    const updateSeaCreatures = async () => {
       setIsError(false);
       setIsLoading(true);

       try {
           const result = await axios(url);
           setSeaCreatures(result.data);
       } catch (error) {
           setIsError(true);
       }
       setIsLoading(false);
    };

    // Component Did Mount
    useEffect(() => {
        updateSeaCreatures();
    }, [url]);
    return (
        <Grid type="seacreature" data={seaCreatures} />
    )
}

export default SeaCreatures;