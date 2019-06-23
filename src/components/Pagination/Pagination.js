import React, { Fragment, useContext } from 'react'
import UserDataContext from '../../providers/userData/userDataContext'

const Pagination = () => {
  const userDataContext = useContext(UserDataContext)

  const { switchPage, page, totalUsers } = userDataContext
  return (
    <Fragment>
      <button disabled={page < 2} onClick={() => switchPage(page - 1)}>
        -
      </button>
      <button
        disabled={page > totalUsers / 30}
        onClick={() => switchPage(page + 1)}
      >
        +
      </button>
    </Fragment>
  )
}

export default Pagination
