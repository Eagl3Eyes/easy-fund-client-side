import { useEffect } from "react";
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Art & Craft School`;
    }, [title])
};

export default useTitle;