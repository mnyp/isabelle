import React, { Fragment, useEffect, useState } from "react";
import '../../../App.scss';

// Components
import Search from '../../search/Search';
import Grid from '../../grid/Grid';

// Axios
const axios = require('axios');

function SeaCreatures() {
    // States
    const [seaCreatures, setSeaCreatures] = useState([]);
    const [url] = useState("https://acnhapi.com/v1a/sea/");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Handle Events
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    // On Load
    const updateSeaCreatures = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios(url + searchTerm);
            setSeaCreatures(result.data);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    // Component Did Mount
    useEffect(() => {
        updateSeaCreatures();
    }, [searchTerm]);
    return (
        <Fragment>
            <Search onSearch={handleSearch} />
            <Grid type="seacreature" data={seaCreatures} />
        </Fragment>
    )
}

export default SeaCreatures;