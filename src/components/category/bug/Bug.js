import React, { Fragment, useEffect, useState } from "react";
import '../../../App.scss';

// Components
import Search from '../../search/Search';
import Grid from '../../grid/Grid';

// Axios
const axios = require('axios');

function Bug() {
    // States
    const [bugs, setBugs] = useState([]);
    const [url] = useState("https://acnhapi.com/v1a/bugs/");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Handle Events
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    // On Load
    const updateBugs = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios(url + searchTerm);
            setBugs(result.data);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    // Component Did Mount
    useEffect(() => {
        updateBugs();
    }, [searchTerm]);
    return (
        <Fragment>
            <Search onSearch={handleSearch} />
            <Grid type="bug" data={bugs} />
        </Fragment>
    )
}

export default Bug;