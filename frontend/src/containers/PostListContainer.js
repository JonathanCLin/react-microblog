import { connect } from 'react-redux';
import { upVoteFromAPI, downVoteFromAPI} from '../actions';
import PostList from '../components/PostList';

function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}


//add get all post to dispatch
export default connect(mapStateToProps, {upVoteFromAPI, downVoteFromAPI})(PostList);