import React, { Fragment, useEffect, useState } from "react";
import '../../../App.scss';

// Components
import Search from '../../search/Search';
import Grid from '../../grid/Grid';

// Axios
const axios = require('axios');

function Fish() {
    // States
    const [fish, setFish] = useState([]);
    const [url, setUrl] = useState("https://acnhapi.com/v1a/fish/");
    const [searchTerm, setSearchTerm] = useState("");
    // const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Handle Events
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    // On Load
    const updateFish = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios(url + searchTerm);
            setFish(result.data);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    // Component Did Mount
    useEffect(() => {
        updateFish();
    }, [searchTerm]);

    return (
        <Fragment>
            <Search onSearch={handleSearch} />
            <Grid type="fish" data={fish} />
        </Fragment>
    )
}

export default Fish;