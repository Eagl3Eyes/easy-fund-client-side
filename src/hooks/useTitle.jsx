import { useEffect } from "react";
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Easy Fund`;
    }, [title])
};

export default useTitle;