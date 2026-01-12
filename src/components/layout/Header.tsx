import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 min-w-fit">
          <Image
            src="/images/medcart-logo.svg"
            alt="MedCart"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <div className="hidden md:block h-6 w-px bg-gray-300"></div>

        <div className="hidden md:flex flex-col cursor-pointer group">
          <span className="font-medium text-sm text-[#666666]">
            Delivery to
          </span>
          <div className="flex items-center gap-1">
            <span className="font-medium text-sm text-black">
              Bengaluru, 560102
            </span>
            <Image
              src="/images/down-solid.svg"
              alt="MedCart"
              width={21}
              height={21}
              className="h-5 w-auto"
            />
          </div>
        </div>

        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Medicines or Health Products"
              className="w-full border rounded-lg pr-10 pl-4 py-2.5 font-normal text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 border-gray-200 hover:bg-white transition-colors"
            />

            <div className="absolute right-3 top-2.5 w-5 h-5 text-gray-400">
              <Image
                src="/images/search.png"
                alt="Search"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm">
          <button className="flex items-center gap-1 font-normal text-black hover:text-purple-600 transition-colors">
            <Image
              src="/images/login.svg"
              alt="Login"
              width={18}
              height={18}
              className="w-4 h-4"
            />
            <span>Login</span>
          </button>

          <button className="flex items-center gap-1 font-normal text-black hover:text-purple-600 transition-colors">
            <Image
              src="/images/cart.svg"
              alt="Cart"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>Cart</span>
          </button>

          <button className="flex items-center gap-1 font-normal text-black hover:text-purple-700 transition-colors">
            <Image
              src="/images/plus.svg"
              alt="Become a seller"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Become a seller</span>
          </button>

          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            <Image
              src="/images/dots.svg"
              alt="dots"
              width={16}
              height={52}
              className="w-4 h-13"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
