// @format
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case "delete_blogpost":
            return state.filter(blog => blog.id !== action.payload);
        case "update_blogpost":
            return state.map(blogPost =>
                blogPost.id === action.payload.id ? action.payload : blogPost
            );
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content) =>
        dispatch({ type: "add_blogpost", payload: { title, content } });
};
const deleteBlogPost = dispatch => {
    return id => dispatch({ type: "delete_blogpost", payload: id });
};
const editBlogPost = dispatch => {
    return (id, title, content) =>
        dispatch({ type: "update_blogpost", payload: { id, title, content } });
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    []
);
