import axios from '../api/axios';

const App = async (userID, setOrders) => {
    // const [users, setUsers] = useState([]);
    let orderList = []

    try {
        const response = await axios.get(`/order-history/search-history/${userID}`);
        if (response.data) {
            response.data.map(item => {
                orderList.push(item)
            })
        }
        setOrders(orderList)
    } catch (error) {
        console.error('Error fetching users:', error);
    }
  };
  
  export { App };