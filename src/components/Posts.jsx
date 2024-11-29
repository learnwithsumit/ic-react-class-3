import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

export default function Posts() {
    const { posts, isLoading, isError, error } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // decide what to render
    let content;

    if (isLoading) {
        content = <h1>Loading posts...</h1>;
    }
    if (!isLoading && isError) {
        content = <h1 className="text-red-500">There was an error: {error}</h1>;
    }

    if (!isLoading && !isError) {
        if (posts.length > 0) {
            content = (
                <ul>
                    {posts.map((post) => (
                        <li
                            style={{
                                listStyleType: "square",
                            }}
                            key={post.id}
                        >
                            {post.title}
                        </li>
                    ))}
                </ul>
            );
        } else {
            content = <h1>No posts found!</h1>;
        }
    }

    return (
        <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {content}
        </div>
    );
}
