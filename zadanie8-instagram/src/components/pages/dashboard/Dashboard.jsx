import React, { useState, useEffect } from 'react';
import Main from 'components/layouts/main/Main';
import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import { update, get } from 'services/firebase';

import styles from './style.module.css';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get('posts').then((databasePosts) => {
      setPosts(Object.values(databasePosts ?? {}));
    });
  }, []);

  const handleLike = (post) => {
    update(`posts/${post.id}`, {
      ...post,
      likes: post.likes + 1,
    }).then(() => {
      const copiedPostArray = [...posts];
      const selectedPostIndex = posts.findIndex(
        (frontPost) => frontPost.id === post.id
      );
      copiedPostArray[selectedPostIndex].likes = post.likes + 1;

      setPosts(copiedPostArray);
    });
  };

  return (
    <RestrictedRoute>
      <Main>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.id}>
              <div className={styles.avatarContainer}>
                <img src={post.author?.avatar} alt="avatar" />
                <p>{post.author?.name}</p>
              </div>
              <img src={post.image} alt="post" />
              <div className={styles.descriptionContainer}>
                <div className={styles.likesContainer}>
                  <button onClick={() => handleLike(post)}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ei-like.svg/1200px-Ei-like.svg.png"
                      alt="Like"
                    />
                    Like ({post.likes})
                  </button>
                </div>
                <p className={styles.title}>{post.title}</p>
                <p className={styles.description}>{post.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Main>
    </RestrictedRoute>
  );
}

export default Dashboard;
