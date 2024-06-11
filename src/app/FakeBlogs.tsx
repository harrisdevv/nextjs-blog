const fakeBlogs = [
  {
    title: "Introduction to React",
    publishedAt: new Date("2022-01-01"),
    updatedAt: new Date("2022-01-02"),
    description: "Learn the basics of React and how to build web applications using this popular JavaScript library.",
    image: { filePath: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwfGVufDB8fDB8fHww", blurhashDataUrl: "fake-blurhash", width: 100, height: 100},
    isPublished: true,
    author: "John Doe",
    tags: ["React", "JavaScript", "Web Development"],
    body: { /* fake body content */ },
    url: "/introduction-to-react",
    readingTime: "10 minutes",
    toc: {
      level: 1,
      text: "Introduction",
      slug: undefined
    }
  },
  {
    title: "Getting Started with Node.js",
    publishedAt: new Date("2022-01-03"),
    updatedAt: new Date("2022-01-04"),
    description: "Learn how to set up and use Node.js to build scalable and efficient server-side applications.",
    image: { filePath: "https://images.unsplash.com/photo-1601034913836-a1f43e143611?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", blurhashDataUrl: "fake-blurhash", width: 100, height: 100},
    isPublished: true,
    author: "Jane Smith",
    tags: ["Node.js", "JavaScript", "Server-side"],
    body: { /* fake body content */ },
    url: "/getting-started-with-nodejs",
    readingTime: "15 minutes",
    toc: {
      level: 1,
      text: "Introduction",
      slug: undefined
    }
  },
  {
    title: "Building RESTful APIs with Express",
    publishedAt: new Date("2022-01-05"),
    updatedAt: new Date("2022-01-06"),
    description: "Learn how to create RESTful APIs using Express, a popular web application framework for Node.js.",
    image: { filePath: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D", blurhashDataUrl: "fake-blurhash", width: 100, height: 100},
    isPublished: true,
    author: "Alex Johnson",
    tags: ["Express", "Node.js", "API Development"],
    body: { /* fake body content */ },
    url: "/building-restful-apis-with-express",
    readingTime: "20 minutes",
    toc: {
      level: 1,
      text: "Introduction",
      slug: undefined
    }
  },
  {
    title: "Introduction to TypeScript",
    publishedAt: new Date("2022-01-07"),
    updatedAt: new Date("2022-01-08"),
    description: "Learn the fundamentals of TypeScript, a statically typed superset of JavaScript.",
    image: { filePath: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww", blurhashDataUrl: "fake-blurhash", width: 100, height: 100},
    isPublished: true,
    author: "Sarah Thompson",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    body: { /* fake body content */ },
    url: "/introduction-to-typescript",
    readingTime: "12 minutes",
    toc: {
      level: 1,
      text: "Introduction",
      slug: undefined
    }
  },
  {
    title: "Testing React Components with Jest",
    publishedAt: new Date("2022-01-09"),
    updatedAt: new Date("2022-01-10"),
    description: "Learn how to write unit tests for React components using Jest, a popular JavaScript testing framework.",
    image: { filePath: "https://images.unsplash.com/photo-1717831499998-6f5bafe9e287?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", blurhashDataUrl: "fake-blurhash", width: 100, height: 100},
    isPublished: true,
    author: "Michael Brown",
    tags: ["React", "Testing", "JavaScript"],
    body: { /* fake body content */ },
    url: "/testing-react-components-with-jest",
    readingTime: "18 minutes",
    toc: {
      level: 1,
      text: "Introduction",
      slug: undefined
    }
  },
  // Add more fake blogs here...
];

export default fakeBlogs;
