import React from "react";

import styles from "./Post.module.scss";

const Post = ({ title, date }) => {
  return (
    <div className={styles.post_wrapper}>
      <div className={styles.post_lower}>
        <div className={styles.image}>
          <h2>IMAGE</h2>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h6 className={styles.make_cover}>{title}</h6>
          </div>
          <div className={styles.more}>
            <h6>{date}</h6>
            <h6 className={styles.make_cover}>Read Article</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
