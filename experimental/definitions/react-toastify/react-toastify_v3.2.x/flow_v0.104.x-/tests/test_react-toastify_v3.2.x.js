import React from 'react'
import { ToastContainer, toast, style } from 'react-toastify'

const toastContent = <div>Toast!</div>

// $ExpectError
toast(toastContent, { type: toast.TYPE.SUCCES })
toast(toastContent, { type: toast.TYPE.SUCCESS })

// $ExpectError
toast.success(toastContent, { onOpen: false })
toast.success(toastContent, { onOpen: () => console.log('open') })

// $ExpectError
toast.info(toastContent, { onClose: false })
toast.info(toastContent, { onClose: () => console.log('close') })

// $ExpectError
toast.warn(toastContent, { onOpen: false })
toast.warn(toastContent, { onOpen: () => console.log('open') })

// $ExpectError
toast.error(toastContent, { onClose: false })
toast.error(toastContent, { onClose: () => console.log('close') })

// $ExpectError
const isActiveBad: number = toast.isActive(1)
const isActiveGood: boolean = toast.isActive(1)

// $ExpectError
toast.dismiss('1')
toast.dismiss()
toast.dismiss(1)

// $ExpectError
toast.update()
toast.update(1)
toast.update(1, { render: toastContent })

// $ExpectError
style({ width: 100 })
style({ width: '100px' })

function BadToast() {
  // $ExpectError
  return <ToastContainer position={toast.POSITION.TOPP_RIGHT} />
}

function GoodToast() {
  return (
    <ToastContainer
      newestOnTop
      style={{}}
      toastClassName="toasty"
      pauseOnHover
      closeOnClick
      autoClose={false}
      position={toast.POSITION.TOP_LEFT}
      closeButton={false}
      progressClassName="progress"
      className="classes"
      bodyClassName="body"
      hideProgressBar
      transition={false}
    />
  )
}
