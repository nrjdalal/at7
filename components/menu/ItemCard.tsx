/* eslint-disable @next/next/no-img-element */
export const ItemCard = ({ description, name, price, src, veg }: any) => {
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
      <div className="relative flex h-full w-1/3 max-w-[160px] items-center justify-center">
        {
          // ~ Item Image Src (optional)
        }
        {src ? (
          <img className="mb-3 aspect-square h-full w-full rounded-lg object-contain object-center" src={src} alt="" />
        ) : (
          ''
        )}
        {
          // ~ Item Add or Remove
        }
        <div
          className={`absolute left-1/2 flex w-20 -translate-x-1/2 items-center justify-center rounded-md border-[1.5px] bg-white py-1 font-medium ${
            veg ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'
          } ${src ? 'bottom-0' : ''}`}
        >
          ADD
        </div>
      </div>
    </div>
  )
}