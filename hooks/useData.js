import { useContext } from "react";
import { mainContext } from "../contexts/DataProvider";

function useData() {
    return useContext(mainContext);
}

export default useData;
