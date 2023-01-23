export type CartItem = {
    id: number;
    title: string;
    quantity: number;
    isPack: boolean;
    packItems?: PackItem[];
    sku_price: number;
    image_url: string | null;
};

export type PackItem = {
    title: string;
    attributes: string[];
};