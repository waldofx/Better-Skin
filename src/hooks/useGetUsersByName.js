import { useQuery } from "@apollo/client";
import { GetUsersByName } from "../graphql/query";

function useGetDataByName() {
    const { data: dataByName, loading: loadingDataByName, error: errorDataByName } = useQuery(GetUsersByName);
    return {
        dataByName,
        loadingDataByName,
        errorDataByName,
    };
}

export default useGetDataByName;
