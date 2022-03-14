/* eslint-disable @next/next/no-img-element */

import { items, store } from 'data.js'

const index = () => {
  const ItemCard = ({ description, name, price, src, nonveg }: any) => {
    return (
      <div className="mx-4 flex items-center gap-4 border-b-[1px] py-4 md:mx-0">
        <div className="flex w-2/3 flex-col gap-2">
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-sm border-[1px] ${
              nonveg ? 'border-red-500' : 'border-green-500'
            }`}
          >
            <div className={`h-1/2 w-1/2 rounded-full ${nonveg ? 'bg-red-500' : 'bg-green-500'}`} />
          </div>
          <h2 className="font-medium">{name}</h2>
          <p>₹{price}</p>

          {description ? (
            <>
              <p className="text-xs text-slate-400 sm:text-sm">{description}</p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="relative flex w-1/3 items-center justify-center">
          {src ? (
            <>
              <img
                className="mb-3 aspect-square h-full w-full rounded-lg object-contain object-center"
                src={src}
                alt=""
              />
              <div
                className={`absolute left-1/2 bottom-0 flex w-16 -translate-x-1/2 justify-center rounded-md border-[1.5px] bg-white py-1 font-medium ${
                  nonveg ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500'
                }`}
              >
                Add +
              </div>
            </>
          ) : (
            <div
              className={`flex w-16 justify-center rounded-md border-[1.5px] bg-white py-1 font-medium ${
                nonveg ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500'
              }`}
            >
              Add +
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-full items-center justify-center bg-blue-900 md:h-20">
          <img className="h-1/2" src={store.logo} alt="" />
        </div>

        <div className="mx-4 flex max-w-screen-lg flex-col gap-3 border-b-2 border-dashed py-4 text-sm text-slate-500">
          <p className="text-slate-700">Lajpat Nagar | 9 km</p>
          <h1>{store.description}</h1>
        </div>

        <div className="grid w-full max-w-screen-lg md:grid-cols-2 md:gap-x-4 md:px-4 lg:px-0">
          {items.map((item) => {
            return (
              <ItemCard
                key={item.xid}
                name={item.name}
                description={item.description}
                price={item.price}
                nonveg={item.nonveg}
                src={item.src}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default index
