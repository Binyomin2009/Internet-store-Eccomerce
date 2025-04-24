"use client"

import { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getProd } from "@/api/productSlice";
import { IProducts } from "../../../interface";
import Link from "next/link";
import { AddToCardSlice } from "@/api/cartSlice";

const Card = () => {

  const products = useSelector((store: any) => store.product.data?.products || []);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProd())
  }, [dispatch])

  return (
    <>
      <div className="flex justify-around mt-[30px] flex-wrap gap-[20px]">
        {products?.map((el: IProducts) => {
          return (
            <div
              className="bg-gray-100 p-5 w-full max-w-[250px] rounded-lg relative group h-[400px]"
              key={el.id}
            >
              <Image src={`https://store-api.softclub.tj/images/${el.image}`} alt="Product" width={300} height={100} />

              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Link href={"/"}>
                  <FavoriteBorderIcon className="text-gray-600 hover:text-red-500 cursor-pointer transition duration-300" />
                </Link>
                <Link href={`/products/${el.id}`}>
                  <VisibilityIcon
                    className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300"
                  />
                </Link>
              </div>

              <button className="bg-black text-white w-full p-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300"
                onClick={() => { dispatch(AddToCardSlice(el.id)) }}>
                Add To Cart
              </button>

              <p>{el.productName}</p>
              <p className="text-[red]">${el.price}</p>
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default Card
