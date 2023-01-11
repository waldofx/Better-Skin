import { DeleteShipments } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useDeleteShipments() {
    const [deleteShipments, { loading: loadingDelete }] = useMutation(DeleteShipments);
    return { deleteShipments, loadingDelete };
}

export default useDeleteShipments;