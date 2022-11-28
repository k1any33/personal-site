import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  const modalContentRef = useRef(null)
  const modalStyles = isOpen ? 'modal modal-open top-0' : 'modal'
  useOnClickOutside(modalContentRef, () => {
    onClose()
  })

  return (
    <div className={modalStyles}>
      <div className="modal-box" ref={modalContentRef}>
        {children}
      </div>
    </div>
  )
}

export default Modal
