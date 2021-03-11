import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Order from 'src/components/Order';
import { sendOrder } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => {
  let total = 0;
  state.cart.articles.forEach((article) => {
    total += article.qty * article.pre_tax_price;
  });

  return {
    articles: state.cart.articles,
    total,
    loading: state.order.loading,

  };
};

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  onClick: async (paiment) => {
    console.log(paiment);
  },

});

const connected = connect(mapStateToProps, mapDispatchToProps)(Order);
export default withRouter(connected);
