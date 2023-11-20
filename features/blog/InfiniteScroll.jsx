import React, { useState, useEffect, useCallback } from "react";
import { Loader } from "../../shared/lib/loader/Loader";

const InfiniteScroll = ({ data, renderItem }) => {
  const [list, setList] = useState(data.slice(0, 20));
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(true);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setLoading(true);
        }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (!loading) return;
        if (page * 10 >= data.length) return setLoading(false);

        const fetchData = async () => {
            try {
                const newData = data.slice(page * 10, page * 10 + 10);
                setList((prevList) => [...prevList, ...newData]);
                setPage((prevPage) => prevPage + 1);
            }   catch (error) {
                    console.error("Error fetching data:", error);
            }   finally {
                    setLoading(false);
            }
        };

    fetchData();
        }, [loading, page, data]);

    return (
        <>
        {list.map(renderItem)}
        {loading && <Loader />}
        </>
    );
};

export default InfiniteScroll;