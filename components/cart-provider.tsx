'use client';
import {createContext,useContext,useState,type Dispatch,type SetStateAction,type ReactNode} from 'react';
import type {Cart} from '@/lib/catalog';
const CartContext=createContext<{cart:Cart;setCart:Dispatch<SetStateAction<Cart>>}|null>(null);
export function CartProvider({children}:{children:ReactNode}){const [cart,setCart]=useState<Cart>({});return <CartContext.Provider value={{cart,setCart}}>{children}</CartContext.Provider>}
export function useCart(){const value=useContext(CartContext);if(!value)throw new Error('CartProvider is required');return value;}
