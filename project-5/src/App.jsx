import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdate from "./components/AddAndUpdate";



const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  // for network call
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        // console.log(contactLists);
        setContacts(contactLists);
      } catch (error) {
        console.log(error)
      }
    }

    getContacts();
  }, [])
  return (
    <>
      <div className="m-auto max-w-[370px] px-4">
        <Navbar />

        <div className="flex gap-2">
          <div className="flex flex-grow relative items-center ">
            <FiSearch className="text-white text-2xl absolute ml-2" />
            <input
              type="text"
              className="h-10 rounded-md flex-grow border border-white bg-transparent" placeholder="" />
          </div>

          <AiFillPlusCircle 
            onClick={onOpen} 
            className="text-5xl cursor-pointer text-white" />

        </div>
        <div className="flex flex-col gap-3 mt-4 ">
          {
            contacts.map(contacts => (
              <ContactCard key={contacts.id} contacts={contacts} />
            ))
          }
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
    </>

  );
};

export default App;