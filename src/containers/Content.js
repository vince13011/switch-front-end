import { connect } from 'react-redux';
import Content from 'src/components/Content';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  articles: state.articles,
  title: state.home.title,
  text: "Les nouveautés du mois sont à l'honneur.",
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
