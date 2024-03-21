const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    const isError = message.toLowerCase().includes('error') || message.toLowerCase().includes('fail')
    console.log({ message })
    return (
      <div className={ isError ? 'error-red' : 'error' } >
        { message }
      </div>
    )
  }

  export default Notification