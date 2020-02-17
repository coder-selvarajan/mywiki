---
id: http-service
title: Http Service
sidebar_label: Http Service
---

## Calling Backend Services

- JSONPlaceHolder

- Angular: We have to use 'HttpModule' for http requests.. which is kinda complicated..
- React : We can use our preferred libs for http requests.. the options are

  - Fetch API
  - jQuery AJAX
  - Axios

Sample:

```js
// Api call with promise
const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
promise.then();

// The state of promise would initially be 'pending'..
// Upon success it will become 'resolved'
// Upon failure it will become 'rejected'

// When you print the promis it will showcase two attributes..
// 1. PromiseStatus: 'resolved'
// 2. PromiseValue: Data object


// Here is the modern way of handling api calls..
async componentDidMount() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // OR
  const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  this.setState({ posts });
}
```

Other API stuffs:

```js
// Add Object
handleAdd = async () => {
  const obj = { title: "a", body: "b" };
  const { data: post } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    obj
  );
};

// Update Object
handleUpdate = async post => {
  post.title = "Updated";
  axios.put(apiEndPoint + "/" + post.id, post); // To update the entire object
  const posts = [...this.state.posts];
  const index = posts.indexOf(post);
  posts[index] = { ...post };
  this.setState({ posts });

  // To update specific fields alone
  // axios.path(apiEndPoint + "/" + post.id, { title: post.title });
};

// Delete object (pessimistic approach)
handleDelete = async () => {
  await axios.delete(apiEndPoint + "/" + post.id);

  const posts = this.state.posts.filter(p => p.id !== post.id);
  this.setState({ posts });
};
```

> Whenever browser sends a request to different domain then it will go as `OPTIONS` request

### Optimistic Vs Pessimistic Updates

- Optimistic
  - Update the ui first and then call the server update call
- Pessimistic
  - Call the service first and then update the ui

Above sample code is for pessimistic approach.. below code uses optimistic approach..

```js
// Delete object (Optimistic approach)
handleDelete = async () => {
  const originalPosts = this.state.posts;

  const posts = this.state.posts.filter(p => p.id !== post.id);
  this.setState({ posts });

  try {
    await axios.delete(apiEndPoint + "/" + post.id);
  } catch (ex) {
    alert("Something went wrong while deleting a post!");
    this.setState({ posts: originalPosts });
  }
};
```

<!--DOCUSAURUS_CODE_TABS-->
<!--Info-->
<br/>
<!--Sample-->

<!--END_DOCUSAURUS_CODE_TABS-->
