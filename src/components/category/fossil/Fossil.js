import React, { Fragment, useEffect, useState } from "react";
import '../../../App.scss';

// Components
import Search from '../../search/Search';
import Grid from '../../grid/Grid';

// Axios
const axios = require('axios');

function Fossils() {
    // States
    const [fossils, setFossils] = useState([]);
    const [url, setUrl] = useState("https://acnhapi.com/v1a/fossils/");
    const [searchTerm, setSearchTerm] = useState("");
    // const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Handle Events
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    // On Load
    const updateFossils = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios(url + searchTerm);
            setFossils(result.data);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    // Component Did Mount
    useEffect(() => {
        updateFossils();
    }, [searchTerm]);

    return (
        <Fragment>
            <Search onSearch={handleSearch} />
            <Grid type="fossil" data={fossils} />
        </Fragment>
    )
}

export default Fossils;