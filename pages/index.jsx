import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [postList, setPostList] = useState([
    { id: 1, title: "This is a title", desc: "This is a descriptidon" },
  ]);
  const [postTitle, setPosttitle] = useState("");
  const [postDesc, setPostDesc] = useState("");

  const handleChange = (event) => setPosttitle(event.target.value);
  const handleChangeDesc = (event) => setPostDesc(event.target.value);

  const postAdd = () => {
    if (postTitle.length && postDesc.length) {
      const newPost = { title: postTitle, desc: postDesc };
      const updatedPost = [...postList, newPost];
      setPostList(updatedPost);
      setPosttitle("");
      setPostDesc("");
    } else {
      alert("All inputs must be filled");
    }
  };

  console.log(postTitle, postDesc);
  return (
    <div className={styles.container}>
      <Head>
        <title>Podcaster</title>
        <meta name="desc" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Podcaster!</a>
        </h1>
        <div>
          <h1></h1>
        </div>

        <div className={styles.inputsContainer}>
          Add Title
          <input
            value={postTitle}
            className={styles.input}
            onChange={handleChange}
          />
          <br />
          <br />
          Add Description
          <input
            className={styles.input}
            onChange={handleChangeDesc}
            value={postDesc}
          />
          <br />
          <button className={styles.button} onClick={postAdd}>
            ADD
          </button>
        </div>
        <div className={styles.posts}>
          {postList.map((item, i) => (
            <span className={styles.grid} key={item.id}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>
                  {i + 1}.{item.title} &rarr;
                </h2>
                <h4 className={styles.desc}>{item.desc}</h4>
              </a>
            </span>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by{" "}
          <code className={styles.code}>
            <a target="blank" href="https://tohidsh.com">
              Tohid Shabanloo
            </a>
          </code>
        </p>
      </footer>
    </div>
  );
}
