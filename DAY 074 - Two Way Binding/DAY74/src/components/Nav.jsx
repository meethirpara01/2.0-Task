import { useState } from "react"
import Card from "./Card";

const Nav = () => {

    const [showButton, setshowButton] = useState(true);
    const [showForm, setshowForm] = useState(false);


    const handelButton = () => {
        setshowButton(false);
        setshowForm(true);
    }

    const [Name, setName] = useState('');
    const [image, setimage] = useState('');
    const [MoNumber, setMoNumber] = useState('');
    const [Email, setEmail] = useState('');

    const [contacts, setcontacts] = useState([]);

    const handelSubmit = (e) => {
        e.preventDefault();
        setshowButton(true);
        setshowForm(false);

        const con = {
            name: Name,
            image: image,
            mobailNumber: MoNumber,
            email: Email,
        }

        // const oldContact = [...contacts];
        // oldContact.push(con);
        // setcontacts(oldContact);

        setcontacts([...contacts, con]);

        // console.log(oldContact);
    }

    const handelFromClick = () => {
        setshowButton(true);
        setshowForm(false);
    }

    return (
        <div className="Navbar">
            <div className="Nav">
                <h3>PHONE BOOK</h3>
                {showButton && <button onClick={handelButton}>New Contact</button>}
            </div>
            {showForm && <form onSubmit={(e) => { handelSubmit(e) }}  onClick={(e) => { if (e.target === e.currentTarget) { handelFromClick()}}} className="form">
                <input required type="text" value={Name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name" />
                <input required type="text" value={image} onChange={(e) => { setimage(e.target.value) }} placeholder="Profile Pic" />
                <input required type="number" value={MoNumber} onChange={(e) => { setMoNumber(e.target.value) }} placeholder="Enter Contact Number" />
                <input required type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" />
                <button type="submit" className="subbtn">Submit</button>
            </form>}

            {showButton && contacts.map((elem, idx) => {
                return (<Card key={idx} contact={elem} />)
            })}
        </div>
    )
}

export default Nav