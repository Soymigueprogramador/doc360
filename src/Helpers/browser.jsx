import { useMediaQuery } from "@uidotdev/usehooks";

export function getMediaQuery() {
    const defaultText = "only screen and ";

    if (useMediaQuery(`${defaultText}(max-width: 768px)`)) {
        return "small";
    }

    if (
        useMediaQuery(`${defaultText}(min-width: 769px) and (max-width: 992px)`)
    ) {
        return "medium";
    }

    return "large";
}