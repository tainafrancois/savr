"use client"
import React, { FormEvent, Fragment } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { useState } from 'react'
import Image from 'next/image'
import { addUserEmailToProduct } from '@/lib/actions'

interface Props {
    productId: string
}

const Modal = ({ productId }: Props) => {
    let [isOpen, setIsOpen] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      await addUserEmailToProduct(productId, email);
  
      setIsSubmitting(false)
      setEmail('')
      closeModal()
    }
  
    const openModal = () => setIsOpen(true);
  
    const closeModal = () => setIsOpen(false);

  return (
    <>
        <button type="button" className="btn" onClick={openModal} >
            Track
        </button>
        <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)} className="dialog-container">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel transition className="max-w-lg space-y-4  duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0" >
                <div className="dialog-content">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <div className="p-3 border border-gray-200 rounded-10">
                                <Image 
                                    src="/assets/icons/logo.png"
                                    alt="logo"
                                    width={28}
                                    height={28}
                                />
                            </div>

                                <Image 
                                src="/assets/icons/x-close.svg"
                                alt="close"
                                width={24}
                                height={24}
                                className="cursor-pointer"
                                onClick={closeModal}
                                />
                        </div>

                        <h4 className="dialog-head_text">
                            Stay updated with product pricing alerts right in your inbox!
                        </h4>

                        <p className="text-sm text-gray-600 mt-2">
                            Never miss a bargain again with our timely alerts!
                        </p>
                    </div>

                    <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="dialog-input_container">
                        <Image 
                        src="/assets/icons/mail.svg"
                        alt='mail'
                        width={18}
                        height={18}
                        />

                        <input 
                        required
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className='dialog-input'
                        />
                    </div>

                  <button type="submit"
                    className="dialog-btn"
                  >
                    {isSubmitting ? 'Submitting...' : 'Track'}
                  </button>
                </form>
              </div>
                </DialogPanel>
            </div>
        </Dialog>
        
 
    </>
  )
}

export default Modal