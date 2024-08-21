import { useDispatch, useSelector } from 'react-redux';
import {
  handleAddTodo,
  handleEditBlog,
  handleInputChange,
  setCurrentEditedBlogId,
} from '../store/slices/blogSlice';

function AddNewBlog() {
  const blogState = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const { currentEditedBlogId } = blogState;

  const onChangeInput = (e) => {
    dispatch(
      handleInputChange({
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (currentEditedBlogId !== null) {
      dispatch(handleEditBlog());
      dispatch(
        setCurrentEditedBlogId({
          currentBlogId: null,
        })
      );
      dispatch(
        handleInputChange({
          title: '',
          description: '',
        })
      );
    } else {
      dispatch(handleAddTodo());
    }
  };

  return (
    <div>
      <form onSubmit={handleAddBlog}>
        <div>
          <label>Enter Blog Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Blog Title"
            onChange={onChangeInput}
            value={blogState?.formData?.title}
          />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter Blog Description"
            onChange={onChangeInput}
            value={blogState?.formData?.description}
          />
        </div>
        <button type="submit">
          {blogState?.currentEditedBlogId ? 'Edit Blog' : 'Add New Blog'}
        </button>
      </form>
    </div>
  );
}

export default AddNewBlog;
