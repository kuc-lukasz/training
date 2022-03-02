import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(true);
    // const [pending, setPending] = useState("");
    // const [error, setError] = useState("");
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
                console.log(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    // setPending(false);
                    // setError(err);
                }
            });
    }, [url, refresh]);

    return { data, setRefresh };
};
