import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from 'app/layout'
import { Job } from 'pages/job'

export const AppRouter = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Job />}></Route>
                        <Route path="/job/:jobId" element={<Job />}></Route>
                        <Route path="*" element={<h1>NOT FOUND 404</h1>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}