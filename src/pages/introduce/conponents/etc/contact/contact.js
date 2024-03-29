function Contact() {
    const emailDoyeon = "doyeon@gmail.com";
    const emailSuhyeon = "suhyeon@gmail.com";

    return (
        <div className='contact-container'>
            <p className='etc-title'>Contact</p>
            <p>{emailDoyeon}<br/>{emailSuhyeon}</p>
        </div>
    );
}

export default Contact;