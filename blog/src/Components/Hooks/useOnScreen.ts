import React, {useCallback, useMemo, useState} from "react";

export default function useOnScreen<Element extends HTMLElement>(): [
    boolean,
    React.RefCallback<Element>,
] {
    const [intersecting, setIntersecting] = useState(false);
    const observer = useMemo(
        () => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)),
        [setIntersecting],
    );

    const currentElement = useCallback(
        (ele: Element | null) => {
            if (ele) {
                observer.observe(ele);
            } else {
                observer.disconnect();
                setIntersecting(false);
            }
        },
        [observer, setIntersecting],
    );

    return [intersecting, currentElement];
}