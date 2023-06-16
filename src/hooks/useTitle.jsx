import { useEffect } from "react";
const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Artistic Ventures`;
    }, [title])
};

export default useTitle;