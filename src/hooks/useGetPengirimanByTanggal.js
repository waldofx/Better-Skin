import { useQuery } from "@apollo/client";
import { GetPengirimanByTanggal } from "../graphql/query";

function useGetDataByTanggal() {
    const { data: dataByTanggal, loading: loadingDataByTanggal, error: errorDataByTanggal } = useQuery(GetPengirimanByTanggal);
    return {
        dataByTanggal,
        loadingDataByTanggal,
        errorDataByTanggal,
    };
}

export default useGetDataByTanggal;