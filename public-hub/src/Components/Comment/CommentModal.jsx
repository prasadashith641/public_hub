import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

 const CommentModal = ({onClose,isOpen}) => {
  return (
    <div>
        <Modal closeOnOverlayClick={false} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton/>
         
            
          <ModalBody>
            <div>
                <div className='[45%] flex flex-col justify-center'>
                    <img className='max-h-full w-full' src='https://cdn.pixabay.com/photo/2023/04/13/18/54/ai-generated-7923261_640.jpg' alt='' />
                </div>
                <div className='border w-[55%]'>

                </div>
            </div>

         </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
