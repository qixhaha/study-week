import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'
function BookList(props) {
  // console.log('props', props)
  const displayBooks = () => {
    // const [] = user
    const data = props.data
    if (data.loading) {
      return <div>Loading books</div>
    } else {
      return (
        <ul id="book-list">
          {data.books.map((book) => {
            return <li key={book.id}>{book.name}</li>
          })}
        </ul>
      )
    }
  }
  return <div>{displayBooks()}</div>
}

export default graphql(getBooksQuery)(BookList)
