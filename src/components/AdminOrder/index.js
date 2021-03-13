import React,{ useEffect } from 'react';
import './style.scss';

const AdminOrder = ({
  order
}) => {
  

    useEffect(() => {
      loadOrder();
    }, []);

    if (loading) {
      return <Loading />;
    }
    return (
  <div className="order__maincontainer">
   {order_name}

  </div>
  
);

export default AdminOrder;
