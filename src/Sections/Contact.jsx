import React from 'react'
import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const  [form, setForm] = useState( {
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target:{name,value}}) => {
        setForm({...form, [name]:value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true);

        try{
            await emailjs.send('service_rk7a0ti', 'template_v9ypsnq',
                {
                    from_name: form.name,
                    to_name: "Shaahid",
                    from_email: form.email,
                    to_email: 'shaahid.adams@gmail.com',
                    message: form.message
            }, "_DrZU4sOszq4yhPLq")
            setLoading(false);
            setForm({
                name: '',
                email: '',
                message: ''
            });
            alert("Sucess! Your message is on its way")
        }
        catch(error){
            setLoading(false);
            console.log(error);
            alert("Oops, looks like something went wrong")
        }

    }

  return (
    <section className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src={import.meta.env.BASE_URL+"/assets/terminal.png"} className="absolute inset-0 min-h-screen"/>
            <div className="contact-container">
                <h3 className="head-text">Contact Me</h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you are looking for your next developer, data wrangler or just looking to talk, my inbox is open ;-)
                </p>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="Master Yoda...">
                            
                        </input>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input 
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="obiwan@thehighground.com...">
                            
                        </input>
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Message</span>
                        <textarea
                        type="text"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="Speak with you, I must..."
                        />
                    </label>
                    <button className="field-btn" type="submit" disable={loading}>
                        {loading? "Sending..." : "Send Message!"}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>
     
    </section>
  )
}

export default Contact
