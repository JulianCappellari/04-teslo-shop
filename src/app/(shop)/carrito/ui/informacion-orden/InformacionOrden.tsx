'use client'

import { usarCarritoSore } from "@/store";
import { formatoMoneda } from "@/utils";
import { useEffect, useState } from "react";

export const InformacionOrden = () => {

    const [ cargado, setCargado] = useState(false)
    const {subTotal, total, impuestos, itemsEnElCarrito} = usarCarritoSore(state => state.getSumaInformacion())

    useEffect(() => {
        setCargado(true)
    },[ ]) 

    if( !cargado) return <p>Cargando...</p>
 
  return (
    <div className="grid grid-cols-2">
      <span>Nro Productos</span>
      <span className="text-right">{itemsEnElCarrito === 1 ? '1 articulo' : `${itemsEnElCarrito} articulos` }</span>

      <span>Subtotal</span>
      <span className="text-right">{formatoMoneda(subTotal) }</span>

      <span>Impuestos (21%)</span>
      <span className="text-right">{formatoMoneda(impuestos) }</span>

      <span className="mt-5 text-2xl">Total</span>
      <span className="text-right mt-5 text-2xl">{formatoMoneda(total)}</span>
    </div>
  );
};
