const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="p-6 text-xs text-[#0F0] bg-black">
            Copyright {currentYear}{" "}
            <span>Anonymous</span>
            . All rights reserved.
        </div>
    )
}

export default Footer