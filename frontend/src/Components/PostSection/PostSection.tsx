import PostCard from "../PostCard/PostCard";
import "./PostSection.scss";
import { users } from "../../data.tsx";
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostSection = () => {

    const itemsPerPage = 5; // Number of items to load per page
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [currentItems, setCurrentItems] = useState(users.slice(0, itemsPerPage));
    const [loading, setLoading] = useState(false);

    const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

     // Function to load more data on infinite scroll
    const loadMoreData = async () => {
        if (!loading) {
            setLoading(true);
            const nextPage = currentPage + 1;
            const start = (nextPage - 1) * itemsPerPage;
            const end = nextPage * itemsPerPage;
            const newData = users.slice(start, end);

            if (newData.length === 0) {
                // No more data to load
                setHasMore(false);
            } else {
                // Simulate loading delay for 2 seconds before displaying the next page
                await delay(2000);
                setCurrentItems([...currentItems, ...newData]);
                setCurrentPage(nextPage);
            }

            setLoading(false);
        }
    };
    
    useEffect(() => {
        if (loading) {
        setLoading(false);
        }
    }, [currentItems]);
    return (
        <div className="postSection">
            <div className="container">
                <InfiniteScroll
                    dataLength={currentItems.length}
                    next={loadMoreData}
                    hasMore={hasMore}
                    className="loader"
                    loader={<h4>Loading...</h4>} // Custom loader component while loading new data
                    endMessage={<p>No more items to load.</p>} // Message to display when all data is loaded
                    >
                    {currentItems.map((u) => (
                        <PostCard item={u} />
                    ))}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default PostSection