import { Layout } from "@/components"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Add nested routes or children here */}
                </Route>
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router