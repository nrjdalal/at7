/* eslint-disable @next/next/no-img-element */

const index = () => {
  const Items = ({ children, item, price, src }: any) => {
    return (
      <div className="mx-4 flex items-center gap-4 border-b-[1px] py-4 md:mx-0">
        <div className="flex w-2/3 flex-col gap-2">
          <div className="flex h-4 w-4 items-center justify-center rounded-sm border-[1px] border-green-500">
            <div className="h-2/3 w-2/3 rounded-full bg-green-500" />
          </div>
          <h2 className="font-medium">{item}</h2>
          <p>₹{price}</p>

          {children ? (
            <>
              <p className="text-xs text-slate-400">{children}</p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="relative w-1/3">
          {src ? (
            <>
              <img
                className="mb-3 aspect-square h-full w-full rounded-lg object-contain object-center"
                src={src}
                alt=""
              />
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-md border-[1.5px] border-green-500 bg-white py-1 px-2 font-medium text-green-500">
                Add +
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col items-center">
        {
          // ~ h-16 -> md:h-20
        }
        <div className="flex h-16 w-full items-center justify-center bg-blue-900 md:h-20">
          <img className="h-1/2" src="/images/logo.png" alt="" />
        </div>

        <div className="mx-4 flex max-w-screen-lg flex-col gap-3 border-b-2 border-dotted py-4 text-sm text-slate-500">
          <p className="text-slate-700">Lajpat Nagar | 9 km</p>
          <h1>
            Domino’s came from humble beginnings in 1960, with just one store. Now, as the largest pizza company in the
            world, Domino’s proudly continues its legacy of delivering great-tasting pizza to customers’ doors.
          </h1>
        </div>

        <div className="grid w-full max-w-screen-lg md:grid-cols-2 md:gap-x-4">
          <Items item="Margherita" price="219" src="/images/Margherita.jpg">
            Classic delight with 100% real mozzarella cheese
          </Items>

          <Items item="Double Cheese Margherita" price="349" src="/images/Double_Cheese_Margherita.jpg">
            A classic delight loaded with extra 100% real mozzarella cheese
          </Items>

          <Items item="Farmhouse" price="419" src="/images/Farmhouse.jpg">
            Delightful combination of onion, capsicum, tomato & grilled mushroom
          </Items>

          <Items item="Elite One" price="419"></Items>

          <Items item="Supreme One" price="419"></Items>
        </div>
      </div>
    </>
  )
}

export default index
