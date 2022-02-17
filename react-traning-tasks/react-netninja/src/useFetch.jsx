import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(truel);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    //errors comingback from the server
                    throw Error("we cant fetch data from resource");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                }
                // auto catches network / connection error
                else {
                    setIsPending(false);
                    setError(err);
                }
            });
        return () => abortCont.abort();
    }, [url, refresh]);

    return { data, isPending, error, setRefresh };
};
