import { Layout } from "@/components"
import { menu } from "@/constants/menu";
import { Login, NotFoundPage } from "@/template";
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {menu.map((item, index) => {
                        if (item.sub && item.sub.length > 0) {
                            return item.sub?.map((sub, index) => {
                                return (
                                    <Route key={index} path={sub.path} element={sub.element} />
                                );
                            });
                        } else {
                            return (
                                <Route key={index} path={item.path} element={item.element} />
                            );
                        }
                    })}
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router