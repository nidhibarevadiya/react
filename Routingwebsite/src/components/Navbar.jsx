import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react"
import { Outlet  } from "react-router";

 function Navbar1() {
  return (
    <>
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuwPfBt4lD43r3B9PHt6mYBIsrlMu9jjoUQ&s"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" >
          Home
        </NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/profile">Profile</NavbarLink>
       
        <NavbarLink href="*">Error</NavbarLink>
      </NavbarCollapse>
    </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  )
}


export default Navbar1
