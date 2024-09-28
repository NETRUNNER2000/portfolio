import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
        </div>
        <div className='flex justify-center items-center'>
            <div className="social-icon flex justify-center items-center">
                <a href="https://github.com/NETRUNNER2000">
                <img src="/assets/github.svg" className='w-10 h-10' />
                </a>
             </div>
        </div>
    </section>
  )
}

export default Footer
