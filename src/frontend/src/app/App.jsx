import { Route, Routes } from 'react-router-dom';
import { CheckAuth } from '../components/common/CheckAuth';
import { About } from '../pages/About';
import { Blog } from '../pages/Blog';
import { BookList } from '../pages/BookList';
import { Cart } from '../pages/Cart';
import { Homepage } from '../pages/Homepage';
import { OneBook } from '../pages/OneBook';
import { Register } from '../pages/Register';
import { SignIn } from '../pages/SignIn';
import '../styles/base.css';

function App() {
  return (
    <Routes>
      <Route key={'homepage'} path={'/'} element={<Homepage />} />
      <Route key={'about'} path={'/about'} element={<About />} />
      <Route key={'sign in'} path={'/signin'} element={<SignIn />} />
      <Route key={'register'} path={'/registration'} element={<Register />} />
      <Route key={'blog'} path={'/blog'} element={<Blog />} />
      <Route
        key={'cart'}
        path={'/cart'}
        element={
          <CheckAuth>
            <Cart />
          </CheckAuth>
        }
      />
      <Route
        key={'book list'}
        path={'/book/category/:category_id'}
        element={<BookList />}
      />
      <Route
        key={'one book'}
        path={'/book/:id'}
        element={
          <CheckAuth>
            <OneBook />
          </CheckAuth>
        }
      />
    </Routes>
  );
}

export default App;
