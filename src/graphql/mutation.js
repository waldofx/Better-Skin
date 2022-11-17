import { gql } from "@apollo/client";

const InsertProducts = gql`
    mutation MyMutation($object: products_insert_input = {}) {
        insert_products_one(object: $object) {
            id
            name
            price
            initial_stock
            final_stock
            total
        }
    }
`;

const DeleteProducts = gql`
    mutation MyMutation($id: Int!) {
        delete_products(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                id
                name
                price
                initial_stock
                final_stock
                total
            }
        }
    }
`;

const UpdateProducts = gql`
    mutation MyMutation2($object: products_set_input = {}, $id: Int!) {
        update_products(_set: $object, where: { id: { _eq: $id } }) {
            returning {
                id
                name
                price
                initial_stock
                final_stock
                total
            }
            affected_rows
        }
    }
`;

export { InsertProducts, DeleteProducts, UpdateProducts };
