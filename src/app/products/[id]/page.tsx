"use client"

import { useEffect, useState } from "react";
import { Button, IconButton, Rating } from "@mui/material";
import { ShoppingCart, Add, Remove, LocalShipping, Replay } from "@mui/icons-material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { ProdById } from "@/api/getByIdSlice";
import { useParams } from "next/navigation";

let imagesBaseUrl = "https://store-api.softclub.tj/images/";

const ProductByid = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams()


  const data = useSelector((store: any) => store?.getbyid?.data)



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ProdById(id))
  }, [id]);

  useEffect(() => {
    if (data?.images?.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-white p-6 rounded-lg shadow-lg flex gap-6">
      <div className="w-[40%] h-[600px]">
        <div className="w-full h-[400px] mb-4">
          {selectedImage && (
            <Image
              src={imagesBaseUrl + selectedImage.images}
              alt="Main Product"
              className="w-full h-full object-cover rounded-lg"
              width={300}
              height={300}
            />
          )}
        </div>

        <div className="flex gap-2 overflow-x-auto">
          {data?.data?.images?.map((el: any) => (
            <div
              key={el.id}
              className={`w-20 h-20 cursor-pointer border-2 rounded-lg ${selectedImage?.id === el.id ? "border-blue-500" : "border-gray-200"
                }`}
              onClick={() => handleImageClick(el)}
            >
              <img
                src={imagesBaseUrl + el.images}
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>



      <div className="w-2/3">
        <h2 className="text-2xl font-semibold">{data?.data?.productName}</h2>
        <Rating value={4} readOnly className="my-2" />
        <p className="text-xl font-bold text-gray-800">{`$${data?.data?.price}`}</p>

        <div className="mt-4 flex items-center gap-2">
          <p className="text-gray-600">Количество:</p>
          <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            <Remove />
          </IconButton>
          <span className="text-lg">{quantity}</span>
          <IconButton onClick={() => setQuantity(quantity + 1)}>
            <Add />
          </IconButton>
        </div>

        <Button variant="contained" color="primary" className="mt-4 w-full" startIcon={<ShoppingCart />}>
          Купить
        </Button>

        <div className="mt-6 space-y-2 text-gray-600">
          <p className="flex items-center gap-2">
            <LocalShipping className="text-blue-500" /> Бесплатная доставка
          </p>
          <p className="flex items-center gap-2">
            <Replay className="text-green-500" /> 30 дней на возврат
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductByid;