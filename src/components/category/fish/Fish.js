import React, { Fragment, useEffect, useState } from "react";
import '../../../App.scss';

// Components
import Search from '../../search/Search';
import Filter from '../../filter/Filter';
import Grid from '../../grid/Grid';

// Axios
const axios = require('axios');

function Fish() {
    // States
    const [fish, setFish] = useState([]);
    const [url, setUrl] = useState("https://api.nookipedia.com/nh/fish");
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [size, setSize] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Handle Events
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
        if (searchTerm === "") {
            setUrl("https://api.nookipedia.com/nh/fish");
        } else {
            setUrl("https://api.nookipedia.com/nh/fish/");
        }
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        console.log(location);
    };

    const handleSizeChange = (event) => {
        setSize(event.target.value);
        console.log(size);
    };

    // On Load
    const updateFish = async (event) => {
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios.get(url + searchTerm, {
                headers: {
                    'X-API-KEY': "7bf2b447-a697-40a6-9499-5a83bca9b07f"
                },
            });

            switch (event) {
                case "search":
                    return setFish(result.data);
                case "location":
                    switch (location) {
                        case "All":
                            return setFish(result.data);
                        default: setFish(result.data.filter(data => data.location === location));
                    }
                    break;
                case "size":
                    switch (size) {
                        case "All":
                            return setFish(result.data);
                        default: setFish(result.data.filter(data => data.shadow_size === size));
                    }
                    break;
                default: return setFish(result.data);
            }
        
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    // Component Did Mount
    useEffect(() => {
        updateFish("search");
    }, [searchTerm]);

    useEffect(() => {
        updateFish("location");
    }, [location]);

    useEffect(() => {
        updateFish("size");
    }, [size]);

    return (
        <Fragment>
            <Search onSearch={handleSearch} />
            <Filter onLocationChange={handleLocationChange} />
            <Filter onSizeChange={handleSizeChange} />
            <Grid type="fish" data={fish} />
        </Fragment>
    )
}

export default Fish;