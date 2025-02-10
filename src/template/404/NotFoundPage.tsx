import { MatrixRainingEffect } from ".."

const NotFoundPage = () => {
    return (
        <div className="relative overflow-hidden">
            <MatrixRainingEffect />
            <div className="min-h-screen flex flex-col items-center justify-center text-white text-center">
                <div className="text-6xl font-bold">404</div>
                <div className="text-xl mt-2 uppercase">Page Not Found</div>
            </div>
        </div>
    )
}

export default NotFoundPage