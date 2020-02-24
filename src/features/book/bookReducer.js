import { createReducer } from '../../app/common/util/reducerUtils';
import { CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK } from './bookConstants';

const initialState = [
  {
    id: '1',
    title: 'Clean Code in JavaScript',
    author: 'James Padolsey',
    aboutAuthor: 'James Padolsey is a passionate JavaScript and UI engineer with over 12 years\' experience. James began his journey into JavaScript as a teenager, teaching himself how to build websites for school and small freelance projects. In the early years, he was a prolific blogger, sharing his unique solutions to common problems in the domains of jQuery, JavaScript, and the DOM. He later contributed to the jQuery library itself and authored a chapter within the jQuery Cookbook published by O\'Reilly Media. Over subsequent years, James has been exposed to many unique software projects in his employment at Stripe, Twitter, and Facebook, informing his philosophy on what clean coding truly means in the ever-changing ecosystem of JavaScript.',
    publisher: 'PacktPub',
    date: '2020-01-20',
    category: 'JS',
    type: "book",
    page: '548',
    isbn: '9781789957648',
    decorationImg: '/assets/covers/clean-code-js.png',
    photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/9/7/9781789957648-original.png',
    accept: 'Get the most out of JavaScript for building web applications through a series of patterns, techniques, and case studies for clean coding',
    description: 'The book starts with popular clean-coding principles such as SOLID, and the Law of Demeter (LoD), along with highlighting the enemies of writing clean code such as cargo culting and over-management. You’ll then delve into JavaScript, understanding the more complex aspects of the language. Next, you’ll create meaningful abstractions using design patterns, such as the Class Pattern and the Revealing Module Pattern. You’ll explore real-world challenges such as DOM reconciliation, state management, dependency management, and security, both within browser and server environments. Later, you’ll cover tooling and testing methodologies and the importance of documenting code. Finally, the book will focus on advocacy and good communication for improving code cleanliness within teams or workplaces, along with covering a case study for clean coding.',
    relatedItem: [
      {
        title: 'Professional JavaScript',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/9/7/9781838820213-original.png'
      },
      {
        title: 'Mastering JS Functional Programming - 2nd Ed.',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/9/7/9781839213069-original.png'
      },
      {
        title: 'Advanced JavaScript',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/1/2/12665_cover.png'
      }
    ]
  },
  {
    id: '2',
    title: 'Learn React Hooks',
    author: 'Daniel Bugl',
    aboutAuthor: 'Daniel Bugl is a developer, product designer, and entrepreneur focusing on web technologies. He has a Bachelor of Science degree in business informatics and information systems and is now studying data science at the Vienna University of Technology (TU Wien). He is a contributor to many open source projects and a member of the React community. He also founded and runs his own hardware/software start-up, TouchLay, which helps other companies present their products and services. At his company, he constantly works with web technologies, particularly making use of React and React Hooks.',

    publisher: 'PacktPub',
    date: '20219-10-18',
    category: 'JS',
    type: "book",
    page: '548',
    isbn: '9781838641443',

    decorationImg: '/assets/covers/react-hooks.png',

    photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/9/7/9781838641443-original.jpeg',

    accept: 'React Hooks revolutionize how you manage state and effects in your web applications. Toward the concluding chapters, you will learn',

    description: 'This React book starts by introducing you to React Hooks. You will then get to grips with building a complex UI in React while keeping the code simple and extensible. Next, you will quickly move on to building your first applications with React Hooks. In the next few chapters, the book delves into various Hooks, including the State and Effect Hooks. After covering State Hooks and understanding how to use them, you will focus on the capabilities of Effect Hooks for adding advanced functionality to React apps.',

    relatedItem: [
      {
        title: 'Professional JavaScript',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/9/7/9781838820213-original.png'
      },
      {
        title: 'Mastering JS Functional Programming - 2nd Ed.',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/9/7/9781839213069-original.png'
      },
      {
        title: 'Advanced JavaScript',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/1/2/12665_cover.png'
      }
    ]
  },
  {
    id: '3',
    title: 'React Projects',
    author: 'Roy Derks',
    aboutAuthor: 'Roy Derks is a serial start-up CTO, conference speaker, and developer from Amsterdam. He has been actively programming since he was a teenager, starting as a self-taught programmer using online tutorials and books. At the age of 14, he founded his first start-up, a peer-to-peer platform where users could trade DVDs with other users for free. This marked the start of his career in web development, which back then primarily consisted of creating web applications using an MVC architecture with the LAMP stack.',

    publisher: 'PacktPub',
    date: '20219-12-20',
    category: 'React',
    type: "book",
    page: '474',
    isbn: '9781789954937',

    decorationImg: '/assets/covers/React-Project.png',

    photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/9/7/9781789954937-original.png',

    accept: 'Build cross-platform applications of varying complexity for the web, mobile, and VR devices using React tooling',

    description: 'React Projects is your guide to learning React development by using modern development patterns and integrating React with powerful web tools such as GraphQL, Expo, and React 360. You\'ll start building a real-world project right from the first chapter and get hands on with developing scalable applications as you advance to building more complex projects.',

    relatedItem: [
      {
        title: 'Professional JavaScript',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/9/7/9781838820213-original.png'
      },
      {
        title: 'Mastering JS Functional Programming - 2nd Ed.',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/9/7/9781839213069-original.png'
      },
      {
        title: 'Advanced JavaScript',
        photoUrl: 'https://www.packtpub.com/media/catalog/product/cache/aefcd4d8d5c59ba860378cf3cd2e94da/1/2/12665_cover.png'
      }
    ]
  }
];

const createBook = (state, payload) => {
  return [...state, payload.book];
};

const updateBook = (state, payload) => {
  return [
    payload.book,...state.filter(book => book.id !== payload.book.id)
  ];
};

const deleteBook = (state, payload) => {
  return [
    ...state.filter(book => book.id !== payload.bookId)
  ];
};

export default createReducer(initialState, {
  [CREATE_BOOK]: createBook,
  [UPDATE_BOOK]: updateBook,
  [DELETE_BOOK]: deleteBook
})