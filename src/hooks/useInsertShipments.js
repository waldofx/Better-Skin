import { InsertShipments } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function useInsertShipments() {
    const [insertShipments, { loading: loadingInsert }] = useMutation(InsertShipments);
    return { insertShipments, loadingInsert };
}

export default useInsertShipments;