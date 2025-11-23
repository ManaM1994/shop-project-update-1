import { useCart } from "../../hooks/useCart";
import { REMOVE } from "../../context/CardContext";

const productItems = [
  { id: 0, title: "Apple", price: 4000, quantity: 5 },
  { id: 1, title: "Banana", price: 2000, quantity: 3 },
  { id: 2, title: "Cherry", price: 3000, quantity: 7 },
];
const Cart = () => {
  const { cartItems, dispatch } = useCart();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-grow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  item
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  price
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  quantity
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  actions
                </td>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => {
                        dispatch({ type: REMOVE, payload: item.id });
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-80 bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4 capitalize">
            order summary
          </h2>
          <p className="text-lg mb-4">Total: $0</p>
          <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
