import { ComicProps } from "@hooks/comic";

export type ComicNavigationProps = {
    comic: ComicProps;
}

/*export type OrderNavigationProps = {
    id: string;
}*/

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            detail: ComicNavigationProps;
            cart: undefined;
        }
    }
}