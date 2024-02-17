import React, { useEffect, useState } from "react";
import '../../css/posts.css';
import SearchForm from "./SearchForm";
import PostCard from "./PostCard";

const Posts = (props) => {
  const [cached, setCached] = useState();
  const [results, setResults] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res1) => res1.json())
      .then((posts) => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res2) => res2.json())
          .then((users) => {
            posts.map((post) => {
              const user = users.find((user) => user.id === post.userId);
              post.username = user.name;
              return post;
            });
            setCached(posts);
            setResults(posts);
          })
          .catch((err) => {
            console.log(`Can't load users: ${err}`);
          });
      })
      .catch((err) => {
        console.log(`Can't load posts: ${err}`);
      });
  }, []);
  const searchResults = (value) => {
    let filtered = cached;
    if (value.length > 0) {
      let regex = new RegExp(
        value.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
        "ig"
      );

      filtered = cached.filter((post) => {
        return (
          regex.test(post.title) ||
          regex.test(post.username) ||
          regex.test(post.body)
        );
      });
    }
    setResults(filtered);
  };
  return (
    <div>
      <div>
        <div>
          <SearchForm onSearch={searchResults} />
        </div>
      </div>
      {results && (
        <div>
          <section>
            <h3>
              Results: <span data-testid="count">{results.length}</span>
            </h3>
            <hr />
          </section>
          {results.map((res) => {
            return (
              <PostCard
                key={res.id}
                username={res.username}
                title={res.title}
                body={res.body}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Posts;
