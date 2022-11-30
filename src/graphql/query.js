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

export { GetProductsByName, GetUsersByName };
