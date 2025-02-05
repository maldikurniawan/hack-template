import { MatrixRainingEffect } from ".."

const NotFoundPage = () => {
    return (
        <div className="relative overflow-hidden">
            <MatrixRainingEffect />
            <div className="relative w-screen h-screen overflow-hidden flex font-light">
                <div className="flex w-full items-center justify-center p-10">
                    <img src="/images/404.png" alt="404" />
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage