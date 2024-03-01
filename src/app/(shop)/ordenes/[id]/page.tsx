import Link from "next/link";
import { initialData } from "@/seed/seed";
import Image from "next/image";

import { Titulo } from "@/components";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  params: {
    id: string;
  };
}

const productoEnCarrito = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function OrdenesPage({ params }: Props) {
  const { id } = params;

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Titulo titulo={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-1">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Pendiente de pago</span>
              <span className="mx-2">Pago realizado con exito</span>
            </div>

            {/* Items */}
            {productoEnCarrito.map((producto) => (
              <div key={producto.slug} className="flex mb-5 ">
                <Image
                  src={`/products/${producto.imagenes[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={producto.titulo}
                  className="mr-5 rounded"
                />

                <div className="">
                  <p>{producto.titulo}</p>
                  <p>${producto.precio} x 3</p>
                  <p className="font-bold">Subtotal: ${producto.precio} x 3</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - resumen de la compra */}

          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Julian Cappellari</p>
              <p>Avenida siempre viva</p>
              <p>centro</p>
              <p>Cordoba</p>
              <p>Argentina</p>
              <p>CP: 5000</p>
              <p>Nro telefono: 123456789</p>
            </div>

            {/* Divisor */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>Nro Productos</span>
              <span className="text-rigth">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-rigth">$100</span>

              <span>Impuestos (21%)</span>
              <span className="text-rigth">$100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="text-rigth mt-5 text-2xl">$100</span>
            </div>

            <div className="mt-5 w-full mb-2">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-500": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                <span className="mx-2">Pendiente de pago</span>
                <span className="mx-2">Pago realizado con exito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
