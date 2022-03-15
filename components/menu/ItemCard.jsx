import { useRecoilState } from 'recoil'
import { _cart } from 'manager'
import { useEffect, useState } from 'react'

/* eslint-disable @next/next/no-img-element */
export const ItemCard = ({ description, name, price, src, veg, xid }) => {
  const [cart, setCart] = useRecoilState(_cart)

  const addToCart = (xid) => {
    if (cart.length === 0) {
      // ~ add first item
      setCart([
        {
          xid: xid,
          quantity: 1,
        },
      ])
    } else {
      const itemIndex = cart.findIndex((item) => item.xid === xid)

      if (itemIndex !== -1) {
        // ~ xid found, increase quantity
        const __cart = [...cart]
        const __item = { ...__cart[itemIndex] }
        __item.quantity++
        __cart[itemIndex] = { ...__item }
        setCart(__cart)
      } else {
        // ~ xid not found, add item
        setCart([
          {
            xid: xid,
            quantity: 1,
          },
          ...cart,
        ])
      }
    }
  }

  const removeFromCart = (xid) => {
    if (cart.length === 0) {
      // ~ add first item
      setCart([
        {
          xid: xid,
          quantity: 1,
        },
      ])
    } else {
      const itemIndex = cart.findIndex((item) => item.xid === xid)

      if (itemIndex !== -1) {
        // ~ xid found, increase quantity
        const __cart = [...cart]
        const __item = { ...__cart[itemIndex] }
        __item.quantity--
        __cart[itemIndex] = { ...__item }
        setCart(__cart)
      } else {
        // ~ xid not found, add item
        setCart([
          {
            xid: xid,
            quantity: 1,
          },
          ...cart,
        ])
      }
    }
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <div className="mx-4 flex items-center gap-4 border-b-[1px] py-4 md:mx-0">
      {
        // ~ Left Div
      }
      <div className="flex w-2/3 flex-col gap-2">
        {
          // ~ Item Veg / Non-Veg Symbol
        }
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-sm border-[1px] ${
            veg ? 'border-green-500' : 'border-red-500'
          }`}
        >
          <div className={`h-1/2 w-1/2 rounded-full ${veg ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>
        {
          // ~ Item Name
        }
        <h2 className="font-medium">{name}</h2>
        {
          // ~ Item Price
        }
        <p>₹{price}</p>
        {
          // ~ Item Description (optional)
        }
        {description ? (
          <>
            <p className="text-xs text-slate-400 sm:text-sm">{description}</p>
          </>
        ) : (
          ''
        )}
      </div>
      {
        // ~ Right Div
      }
      <div className="relative flex w-1/3 max-w-[160px] items-center justify-center">
        {
          // ~ Item Image Src (optional)
        }
        {src ? (
          <img
            className="mb-2 aspect-square w-full rounded-full object-contain object-center shadow-xl"
            src={src}
            alt=""
          />
        ) : (
          ''
        )}
        {
          // ~ Item Add or Remove
        }
        {cart[cart.findIndex((item) => item.xid === xid)]?.quantity || 0 ? (
          <div
            className={`text-md absolute left-1/2 flex w-20 -translate-x-1/2 cursor-pointer select-none items-center justify-between rounded-md border-[1.5px] font-firaCode ${
              veg ? 'border-green-500 bg-green-500 text-white' : 'border-red-500 bg-red-500 text-white'
            } ${src ? 'bottom-0' : ''}`}
          >
            <div
              className="p-1.5"
              onClick={() => {
                removeFromCart(xid)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {cart[cart.findIndex((item) => item.xid === xid)]?.quantity}
            </div>
            <div
              className="p-1.5"
              onClick={() => {
                addToCart(xid)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        ) : (
          <div
            className={`text-md absolute left-1/2 flex w-20 -translate-x-1/2 cursor-pointer select-none items-center justify-end rounded-md border-[1.5px] bg-white py-1.5 px-1.5 font-medium ${
              veg ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'
            } ${src ? 'bottom-0' : ''}`}
            onClick={() => {
              addToCart(xid)
            }}
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2">ADD</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
