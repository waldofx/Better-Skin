import { useQuery } from "@apollo/client";
import { GetProductsByName } from "../graphql/query";

function useGetDataByName() {
    const { data: dataByName, loading: loadingDataByName, error: errorDataByName } = useQuery(GetProductsByName);
    return {
        dataByName,
        loadingDataByName,
        errorDataByName,
    };
}

export default useGetDataByName;
