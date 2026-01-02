const Card = (props) => {

    const contact = props.contact;
    return (
        <div>
            <div className="card" style={{ backgroundImage: `url(${contact.image})` }}>
                <div className="glass"></div>
                <div className="content">
                    <div className="details">
                        <h3>{contact.name}</h3>
                        <h4>+91{contact.mobailNumber}</h4>
                        <h4>{contact.email}</h4>
                    </div>
                    <div className="elements">
                        <button><i className="ri-add-line"></i> Add Member</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card