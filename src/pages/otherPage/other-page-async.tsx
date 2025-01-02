import { lazy } from "react";

export const OtherPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import("./other-page")), 1500);
        })
);
