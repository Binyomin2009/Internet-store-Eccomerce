export interface IProducts {
    map(arg0: (el: IProducts) => import("react").JSX.Element): import("react").ReactNode
    id: string | number,
    productName: string
    price: string | number,
    image: string | null | object
}