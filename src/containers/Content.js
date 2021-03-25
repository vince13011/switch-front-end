import { connect } from 'react-redux';
import Content from 'src/components/Content';

const mapStateToProps = (state) => ({
  articles: state.articles,
  title: state.home.title,
  text: "Les nouveautés du mois sont à l'honneur.",
});

export default connect(mapStateToProps)(Content);
