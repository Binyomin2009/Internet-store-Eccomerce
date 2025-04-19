"use client"

import { Button, TextField, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { IProducts } from "../../../interface";
import Image from "next/image";
import image from "../../../src/images/Frame 874.png"


const Cart = () => {

    const data: IProducts = [
        {
            id: 1,
            name: "computer",
            price: 313,
            image: { image }
        }
    ]
    // const handleQuantityChange = async (id, newQuantity) => {
    //     try {
    //         setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
    //         await axiosInstance.put(`Cart/update-quantity?id=${id}&quantity=${newQuantity}`);
    //         getProductsCart();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="text-left p-2">Product</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2">Subtotal</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((el) => (
                        <tr key={el.id} className="border-b">
                            <td className="p-2 flex items-center gap-2">
                                <Image
                                    src={el.image}
                                    width={300}
                                    height={300}
                                    alt={el.productName}
                                    // src={`https://store-api.softclub.tj/images/${el?.product?.image}`}
                                    // alt={el?.product?.productName}
                                    className="w-10 h-10"
                                />
                                {/* {el?.product?.productName} */}
                            </td>
                            {/* <td className="p-2">${el?.product?.price}</td> */}
                            <td className="p-2">${el.price}</td>
                            <td className="p-2">
                                <Input
                                    type="number"
                                    // value={quantities[el.id] || 0}
                                    // onChange={(e) =>
                                    //     handleQuantityChange(el.id, parseInt(e.target.value, 10))
                                    // }
                                    inputProps={{ min: 1 }}
                                    style={{ width: "60px" }}
                                />
                            </td>
                            {/* <td className="p-2 font-bold">${el?.product?.price * (quantities[el.id] || 0)}</td> */}
                            <td className="p-2">
                                <Button color="error"
                                // onClick={() => handleDelete(el.id)}
                                >
                                    <DeleteIcon />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-around mt-6">
                <div className="flex items-center gap-4">
                    <TextField label="Coupon Code" variant="outlined" />
                    <Button variant="outlined" color="error">
                        Apply
                    </Button>
                </div>

                <div className="p-8 border rounded-lg w-[330px] flex flex-col gap-[10px]">
                    <p>Shipping: <span className="text-green-500">Free</span></p>
                    <Button variant="contained" color="error" fullWidth>
                        Proceed to Checkout
                    </Button>
                </div>
            </div>

            <div className="flex justify-between mt-6">
                <Link href="/">
                    <Button variant="outlined">Return To Shop</Button>
                </Link>
                <Button variant="outlined" color="error"
                // onClick={handleRemoveAll}
                >
                    Remove all
                </Button>
            </div>
        </div>
    )
}

export default Cart
