import React, {useState} from 'react'
import { toast } from 'react-toastify';
import {motion} from 'framer-motion';

const Contact = () => {


        const [result, setResult] = useState("");

        const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            formData.append(
            "access_key",
            "adc01eb0-0ea2-493e-a440-1b1bdb9629d9"
            );


            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();
            if(data.success){
                toast.success("Forms Submitted Successfully");
                event.target.reset();
            }else{
                toast.error(data.message);
            }
            setResult(data.success ? "Success!" : "Error");

            setTimeout(() => {
                setResult("");
            }, 3000);
                    };
    
  return (
    <motion.div
        initial={{opacity:0, x:-200}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}

    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Lets's Build Your Future Together</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' >
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 text-left">
                    Your Name
                    <input
                    className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                    type="text"
                    placeholder="Your Name"
                    name='Name'
                    required
                    />
                </div>

                <div className="w-full md:w-1/2 px-2 text-left">
                    Your Email
                    <input
                    className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                    type="email"
                    name='Email'
                    placeholder="Your Email"
                    required
                    />
                </div>
            </div>
            <div className='text-left my-6'>
                Message 
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-12 mb-10 rounded cursor-pointer hover:bg-blue-700">
            Send Message
            </button>
        </form>
    </motion.div>
  )
}

export default Contact