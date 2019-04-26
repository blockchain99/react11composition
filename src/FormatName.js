import React from 'react'
function formatname(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Solid',
    lastName: 'Dev'
}
function FormatName() {
  return (
    <div>
      <h1 className="formatinputs">Hello ! {formatname(user)}</h1>
    </div>
  )
}

export default FormatName
