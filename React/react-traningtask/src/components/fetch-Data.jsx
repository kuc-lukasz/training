import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((resp) => {
                if (!resp.ok) {
                    //errors comingback from the server
                    throw Error("we cant fetch data from resource");
                }
                return resp.json();
            })
            .then((data) => {
                setData(data);
                setPending(false);
                console.log(data);
            })
            .catch((err) => {
                setPending(false);
                setError(err);
            });
    }, [url, refresh]);

    return { data, setRefresh, pending, error };
};
