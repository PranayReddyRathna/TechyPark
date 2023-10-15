import React from 'react'

const Query = () => {
  return (
    <>
    <div class="query" id="query">
    <main>
      <h1>For Queries Contact Here</h1>
      <form action="" method="post">
        <div>
          <label >Name</label>
          <input type="text" required placeholder="abc"  />
        </div>
        <div>
          <label>Email</label>
          <input type="email"  required placeholder="xyz@gmail.com" />
        </div>
        <div>
          <label >Query  </label>
          <input type="text" required placeholder='Tell Us About Your Query' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </main>
    </div>
    </>
  )
}

export default Query