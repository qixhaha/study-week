const graphql = require("graphql");
const _ = require("lodash");
const Book = require("../models/book");
const Author = require("../models/author");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");
// 书是属于作者，作者有很多书, 一对多
// 查询一个作者的书
// 查询一本书的作者
const books = [
  { name: "算法导论", genre: "计算机科学", id: "1", authorId: "1" },
  { name: "人性的弱点", genre: "社交", id: "2", authorId: "2" },
  { name: "明朝那些事儿", genre: "历史", id: "3", authorId: "3" },
  { name: "诱人的 GraqhQL 教程", genre: "计算机科学", id: "4", authorId: "1" },
  { name: "诱人的 mobx 教程", genre: "计算机科学", id: "5", authorId: "2" },
];

const authors = [
  { name: "hfpp2012", age: 27, id: "1" },
  { name: "rails365", age: 30, id: "2" },
  { name: "lili", age: 21, id: "3" },
];

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
  }),
  author: {
    type: AuthorType,
    resolve(parent, args) {
      return _.find(authors, { id: parent.authorId });
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    authors: {
      type: GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});
// 修改删除增加 graphql 中使用Mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: {
          type: GraphQLString,
        },
        age: {
          type: GraphQLInt,
        },
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age,
        });
        // console.log(author.save());
        return author.save();
      },
    },
  },
});
module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
