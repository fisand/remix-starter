import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Link } from '@remix-run/react'

export const Header = () => {
  return (
    <div className="h-16 border-b-1 border-white box-border">
      <div className="container m-auto h-full flex justify-between items-center sm:px-8 lt-sm:px-4">
        <div className="flex items-center font-bold cursor-pointer">
          <Link to="/">
            <span className="text-xl">Unoi</span>
          </Link>
          <span className="flex-col-center ml-3 py-.25 px-1.5 text-xs text-#666 bg-white rounded-full font-light">
            <span
              style={{
                backgroundImage: 'linear-gradient(270deg, #B4EAA1 0%, #F8D07A 100%)',
                display: 'inline-block',
                lineHeight: 1,
                WebkitTextFillColor: 'transparent',
              }}
              className="bg-clip-text"
            >
              fisand
            </span>
          </span>
        </div>

        <ConnectButton />
      </div>
    </div>
  )
}
