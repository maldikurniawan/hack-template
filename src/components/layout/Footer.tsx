const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="p-6 text-xs text-white bg-black">
            Copyright ©️ {currentYear}{" "}
            <span>Queen Network Nusantara</span>
            . All rights reserved.
        </div>
    )
}

export default Footer