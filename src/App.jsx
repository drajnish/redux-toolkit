// import CounterButton from './counter/counter-button';
// import CounterValue from './counter/counter-value';

import AddNewBlog from './blog-app/add-new-blog';
import BlogList from './blog-app/blog-list';

function App() {
  return (
    <>
      <div>
        <h1>Redux Toolkit Blog</h1>
        <AddNewBlog />
        <BlogList />
        {/* <CounterButton />
        <CounterValue /> */}
      </div>
    </>
  );
}

export default App;
