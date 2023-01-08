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
            img
            desc
        }
    }
`;

const GetUsersByName = gql`
    query MyQuery {
        users(order_by: { username: asc }) {
            id
            username
            password
            is_admin
            email
        }
    }
`;

const GetUsersByLogin = gql`
    query MyQuery($username: String!, $password: String!) {
        users(where: { username: { _eq: $username }, password: { _eq: $password } }) {
            id
            username
            password
            is_admin
            email
        }
    }
`;

const GetPembayaranByTanggal = gql`
    query MyQuery {
        pembayaran(order_by: { tanggal: asc }) {
            kode
            produk
            harga
            jenis
            tanggal
        }
    }
`;

const GetPengirimanTanggal = gql`
    query MyQuery {
        pembayaran(order_by: { tanggal: asc }) {
            id
            username
            alamat
            produk
            jumlah
            tanggal
        }
    }
`;

export { GetProductsByName, GetUsersByName, GetUsersByLogin };
