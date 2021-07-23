interface IServer {
    shutdown: any
}

interface IWindow {
    server: any
}

interface IBrand {
    name: string
}

interface IProduct {
    id: number;
    name: string;
    empty?: boolean;
    brand: IBrand;
    price: number;
}

interface ISubCategory {
    id: string;
    name: string;
    productIds: number[]
}

interface ICategory {
    name: string;
    subCategories: ISubCategory[]
}