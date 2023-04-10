import 'rsuite/dist/rsuite.min.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddContact from "./pages/AddContact";
import ContactData from "./pages/ContactData";
import EditContact from "./pages/EditContact";
import ConfirmRemove from "./pages/ConfirmRemove";


// import Counter from './components/Counter';


function App() {
    return (

        <main>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="new-contact" element={<AddContact/>}/>
                <Route path="contact-data/:id" element={<ContactData/>}/>
                <Route path="contact-data/:id/edit" element={<EditContact/>}/>
                <Route path="contact-data/:id/edit/remove" element={<ConfirmRemove/>}/>
            </Routes>

        </main>
    );
}

export default App;
