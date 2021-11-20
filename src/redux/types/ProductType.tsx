export type ProductType = {
    products: any[];
    isLoading: boolean;
    isLoaded: boolean;
    errorMessage: string | null;
    saved: "Y" | "N" | "P";
}