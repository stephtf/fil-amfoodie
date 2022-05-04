const Replies = () => {
    return (
        <form className='reply-group space-below-25'>
          <h3 className='space-below-10'>Post a Reply</h3>
          <label htmlFor='name' className='form-label'>Name </label>
          <input type='name' name='name' className='form-style textbox-style' required/>
          <label htmlFor='message' className='form-label'>Message </label>
          <textarea rows='4' type='message' name='message' className='form-style textbox-style' required/>
          <button className='form-button'>Post</button>
        </form>
    )
}

export default Replies;

