import { gql } from "@apollo/client";

const GetProductsByName = gql`
    query MyQuery {
        products(order_by: { name: asc }) {
            id
            name
            price
            initial_stock
            final_stock
            total
        }
    }
`;

export { GetProductsByName };
