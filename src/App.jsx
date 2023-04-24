import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddContact from "./pages/AddContact";
import ContactData from "./pages/ContactData";
import EditContact from "./pages/EditContact";
import PageNotFound from "./pages/PageNotFound";


function App() {
    return (

        <main className="app">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="new-contact" element={<AddContact/>}/>
                <Route path="contact-data/:id" element={<ContactData/>}/>
                <Route path="contact-data/:id/edit" element={<EditContact/>}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </main>
    );
}

export default App;
