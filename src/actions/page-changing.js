import { PAGE_IS_CHANGED } from './action-types';
import articlesLoading from './articles-loading';

const pageIsChanged = (page) => {
  return {
    type: PAGE_IS_CHANGED,
    page,
  };
};

const pageChanging = (realworldService, page) => {
  return (dispatch) => {
    dispatch(articlesLoading(realworldService, page));
    dispatch(pageIsChanged(page));
  };
};

export default pageChanging;
