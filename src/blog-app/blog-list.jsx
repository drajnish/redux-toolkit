import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleDeleteBlog,
  handleInputChange,
  setBlogListOnInitialLoad,
  setCurrentEditedBlogId,
} from '../store/slices/blogSlice';

function BlogList() {
  const { blogList } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem('blogList')) || [],
      })
    );
  }, []);

  function onDeleteBlog(getCurrentBlogId) {
    dispatch(
      handleDeleteBlog({
        currentBlogId: getCurrentBlogId,
      })
    );
  }

  function onEditBlog(getCurrentBlog) {
    dispatch(
      setCurrentEditedBlogId({
        currentBlogId: getCurrentBlog?.id,
      })
    );

    dispatch(
      handleInputChange({
        title: getCurrentBlog?.title,
        description: getCurrentBlog?.description,
      })
    );
  }

  return (
    <ul>
      {blogList?.length > 0 ? (
        blogList.map((singleBlog) => (
          <div className="border border-red-500 p-10" key={singleBlog?.id}>
            <h3>{singleBlog?.title}</h3>
            <h3>{singleBlog?.description}</h3>
            <button onClick={() => onEditBlog(singleBlog)}>Edit Blog</button>
            <button onClick={() => onDeleteBlog(singleBlog?.id)}>
              Delete Blog
            </button>
          </div>
        ))
      ) : (
        <h1>No blog added! Please add one</h1>
      )}
    </ul>
  );
}

export default BlogList;
