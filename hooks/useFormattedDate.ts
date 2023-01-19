import { useState, useEffect } from "react";

const useFormattedDate = (date: string) => {
    const [formattedDate, setFormattedDate] = useState<string>(null);

    useEffect(
        () => setFormattedDate(new Date(date).toLocaleString()),
        [] // run once
    );

    return formattedDate;
};

export default useFormattedDate;