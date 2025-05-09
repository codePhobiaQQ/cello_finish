import logo from './../../public/assets/svg/LogoFixed.svg'
import Image from "next/image";

export const Logo = () => {
    return (
        <Image height={110} src={logo} alt="Logo"/>
    );
};