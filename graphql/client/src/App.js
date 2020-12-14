import BookList from './components/BookList'
import AddBook from './components/AddBook'
import './App.css'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
  }),
  cache: new InMemoryCache(),
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  )
}

export default App
