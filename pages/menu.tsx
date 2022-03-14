/* eslint-disable @next/next/no-img-element */

import { ItemCard } from 'components/menu/ItemCard'
import { items, store } from 'data.js'

const index = () => {
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
                veg={item.veg}
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
