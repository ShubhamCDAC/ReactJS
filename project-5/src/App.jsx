import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai"
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";


const App = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();
  // instead of
  // const [isOpen, setIsOpen] = useState(false);

  // const onOpen = () => {
  //   setIsOpen(true);
  // };

  // const onClose = () => {
  //   setIsOpen(false);
  // };

  // for network call
  useEffect(() => {
    // to display all contacts on UI
    const getContacts = async () => {
      try {
        // db reference
        const contactRef = collection(db, "contacts");
        // const contactSnapshot = await getDocs(contactRef);

        onSnapshot(contactRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            };
          });
          // console.log(contactLists);
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error)
      }
    }

    getContacts();
  }, [])

  const filterContacts = (e) => {
      const value = e.target.value;
      // db reference
      const contactRef = collection(db, "contacts");
      // const contactSnapshot = await getDocs(contactRef);

      onSnapshot(contactRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        const filterContacts = contactLists.filter(contact => 
          contact.name.toLowerCase().includes(value.toLowerCase())
        );

        // console.log(contactLists);
        setContacts(filterContacts);
        return filterContacts;
      });
  }
  return (
    <>
      <div className="m-auto max-w-[370px] px-4">
        <Navbar />

        <div className="flex gap-2">
          <div className="flex flex-grow relative items-center ">
            <FiSearch className="text-white text-2xl absolute ml-2" />
            <input
              onChange={filterContacts}
              type="text"
              className="h-10 rounded-md flex-grow border border-white bg-transparent pl-9 text-white" placeholder="Search Contact" />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl cursor-pointer text-white" />

        </div>
        <div className="flex flex-col gap-3 mt-4 ">
          {
            contacts.length <=0 ? <NotFoundContact /> : contacts.map(contacts => (
              <ContactCard key={contacts.id} contacts={contacts} />
            ))
          }
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center"/>
    </>

  );
};

export default App;
