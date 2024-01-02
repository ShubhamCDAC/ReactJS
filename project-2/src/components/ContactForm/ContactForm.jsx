<<<<<<< HEAD
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../Button/Button'
import styles from "./ContactForm.module.css";
import { useState } from 'react';

const ContactForm = () => {

    // useState hook use to rerender data on browser page
    const [name, setName] = useState("Shubham");
    const [email, setEmail] = useState("abc@example.com");
    const [text, setText] = useState("abcd");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        
    }

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>

                <div className={styles.top_button}>
                    <Button text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px" />} />
                    <Button
                        text="VIA CALL"
                        icons={<FaPhoneAlt fontSize="22px" />} />
                </div>

                <div>
                    <Button
                        isOutline={true}
                        text="VIA EMAIL FORM"
                        icons={<HiMail fontSize="24px" />} />
                </div>


                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name'></input>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email'></input>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor='text'>Text</label>
                        <textarea name='text' rows={8}></textarea>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>

                    <div>
                        {name + " " + email + " " + text};
                    </div>
                </form>


            </div>
            <div className={styles.contact_image}>
                <img src='/images/Contact.svg' alt='contact image' />
            </div>
        </section>
    )
}

export default ContactForm;


=======
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../Button/Button'
import styles from "./ContactForm.module.css";
import { useState } from 'react';

const ContactForm = () => {

    // useState hook use to rerender data on browser page
    const [name, setName] = useState("Shubham");
    const [email, setEmail] = useState("abc@example.com");
    const [text, setText] = useState("abcd");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        
    }

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>

                <div className={styles.top_button}>
                    <Button text="VIA SUPPORT CHAT" icons={<MdMessage fontSize="24px" />} />
                    <Button
                        text="VIA CALL"
                        icons={<FaPhoneAlt fontSize="22px" />} />
                </div>

                <div>
                    <Button
                        isOutline={true}
                        text="VIA EMAIL FORM"
                        icons={<HiMail fontSize="24px" />} />
                </div>


                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name'></input>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email'></input>
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor='text'>Text</label>
                        <textarea name='text' rows={8}></textarea>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>

                    <div>
                        {name + " " + email + " " + text};
                    </div>
                </form>


            </div>
            <div className={styles.contact_image}>
                <img src='/images/Contact.svg' alt='contact image' />
            </div>
        </section>
    )
}

export default ContactForm;


>>>>>>> 869c2fb (test)
