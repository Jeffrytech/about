import styles from "./App.module.scss";
import RiseIn from "./components/RiseIn/RiseIn";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import FAQ from "./components/FAQ/FAQ";
import Post from "./components/Post/Post";

import solanaLogo from "./assets/solana.png";

import { useRef, useState } from "react";

const lessFAQs = [
  {
    question: "How secure is your platform",
    answer: `Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
  },
  {
    question: "How secure is your platform",
    answer:
      "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    question: "How secure is your platform",
    answer:
      "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit....",
  },
];

const moreFAQs = [
  {
    question: "How secure is your platform",
    answer: `Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..`,
  },
  {
    question: "How secure is your platform",
    answer:
      "MLorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    question: "How secure is your platform",
    answer:
      "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
  {
    question: "How secure is your platform",
    answer: `Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit`,
  },
  {
    question: "How secure is your platform",
    answer:
      "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
  },
  {
    question: "How secure is your platform",
    answer:
      "Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
];

const posts = [
  {
    title: "The interview with codenjobs",
    date: "march 19 2022",
  },
  {
    title: "How to make solana test validator work with a macbook with m1chip",
    date: "march 19 2022",
  },
  {
    title: "How to start with solana",
    date: "march 19 2022",
  },
];

function App() {
  const initialTop = -20;
  const initialRight = 45;
  const initialRightMiddle = 7;
  const initialTopMiddle = -17;
  const initialTopBottom = 5;
  const initialRightBottom = 5;

  const [right, setRight] = useState(initialRight);
  const [top, setTop] = useState(initialTop);
  const [rightMiddle, setRightMiddle] = useState(initialRightMiddle);
  const [topMiddle, setTopMiddle] = useState(initialTopMiddle);
  const [rightBottom, setRightBottom] = useState(initialRightBottom);
  const [topBottom, setTopBottom] = useState(initialTopBottom);
  const [FAQs, setFAQs] = useState(lessFAQs);
  const [showingMoreFaq, setShowingMoreFaq] = useState(false);

  const topRef = useRef();
  const middleRef = useRef();
  const bottomRef = useRef();

  function handleMouseMove(
    event,
    elementRef,
    setTopFunc,
    setRightFunc,
    initialTopProp,
    initialRightProp
  ) {
    const rect = elementRef.current.getBoundingClientRect();
    const factor = 10;

    const yAxis = Math.round((event.clientY - rect.top) / factor);
    const xAxis = Math.round((event.clientX - rect.left) / factor);
    setRightFunc(initialRightProp - xAxis);
    setTopFunc(initialTopProp + yAxis);
  }

  function handleMouseLeft(
    setTopFunc,
    setRightFunc,
    initialTopProp,
    initialRightProp
  ) {
    setRightFunc(initialRightProp);
    setTopFunc(initialTopProp);
  }

  function handleViewMoreFAQ() {
    if (showingMoreFaq) {
      setFAQs(lessFAQs);
      setShowingMoreFaq(false);
    } else {
      setFAQs(moreFAQs);
      setShowingMoreFaq(true);
    }
  }

  let roundedClass = {
    top,
    right,
  };

  let roundedClassMiddle = {
    top: topMiddle,
    right: rightMiddle,
  };

  let windowWidth = window.matchMedia("(max-width: 600px)");
  if (windowWidth.matches) {
    roundedClassMiddle = {
      top: initialTopMiddle,
      right: rightMiddle + 30,
    };

    roundedClass = {
      top: top + 6,
      right,
    };
  }

  const roundedClassBottom = {
    top: topBottom,
    right: rightBottom,
  };

  return (
    <div className={styles.App}>
      <div className={styles.top}>
        <div>
          <RiseIn text="Building The" delay=".2s" />
          <RiseIn text="Largest Remote" delay=".3s" />
          <RiseIn text="Job Community" delay=".4s" />
        </div>
        <p className={`paragraph`}>
          Hi there, we are here to help make it easy for people to apply and get
          comfortable remote jobs from anywhere in the world.
        </p>
        <div className={styles.top_bottom}>
          <div
            ref={topRef}
            onMouseMove={(event) =>
              handleMouseMove(
                event,
                topRef,
                setTop,
                setRight,
                initialTop,
                initialRight
              )
            }
            onMouseLeave={() =>
              handleMouseLeft(setTop, setRight, initialTop, initialRight)
            }
            className={styles.top_bottom_right}
          >
            <ScrollUp text="POST A JOB" />
            <div className={styles.image_with_header}>
              <h4>FOR $299(</h4>
              <img src={solanaLogo} alt="solana logo" />
              <h4>)</h4>
            </div>
            <h3>OR 10% DISCOUNT</h3>
            <h3>FOR OUR TOKEN</h3>
            <div
              style={roundedClass}
              className={`${styles.circle_top} circle `}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.faq_wrapper}>
        <div className={styles.faq_questions}>
          {FAQs &&
            FAQs.map((faq) => (
              <FAQ question={faq.question} answer={faq.answer} />
            ))}
        </div>
        <button onClick={() => handleViewMoreFAQ()}>{`View ${
          showingMoreFaq ? "less" : "more"
        } faq`}</button>
      </div>
      <div className={`${styles.message} message`}>
        <div className={`${styles.message_inner}  `}>
          <RiseIn text={"We also have"} />
          <div
            ref={middleRef}
            onMouseMove={(element) =>
              handleMouseMove(
                element,
                middleRef,
                setTopMiddle,
                setRightMiddle,
                initialTopMiddle,
                initialRightMiddle
              )
            }
            onMouseLeave={() =>
              handleMouseLeft(
                setTopMiddle,
                setRightMiddle,
                initialTopMiddle,
                initialRightMiddle
              )
            }
            className={styles.message_with_circle}
          >
            <RiseIn text="our own token" />
            <div
              style={roundedClassMiddle}
              className={`${styles.circle_mid} circle`}
            ></div>
          </div>
        </div>
        <p
          style={{ width: "45rem", textAlign: "center" }}
          className={`paragraph`}
        >
          Our token is deployed on solana blockchain for its speed and
          robustness while remaining decentralized and with low transaction
          fees, compared to to other networks.
        </p>
      </div>

      <div className={`${styles.blog_post_wrapper}`}>
        <div className={`${styles.blog_post_controls}`}>
          <h2>Blog Post</h2>
          <button>all Blog posts</button>
        </div>
        <div className={`${styles.blog_posts}`}>
          {posts &&
            posts.map((post) => <Post title={post.title} date={post.date} />)}
        </div>
      </div>

      <div className={`${styles.action}`}>
        <div className={`${styles.texts}`}>
          <RiseIn text="join the" />
          <RiseIn text="remote job" />
          <RiseIn text="community" />
        </div>
        <div
          ref={bottomRef}
          onMouseMove={(event) =>
            handleMouseMove(
              event,
              bottomRef,
              setTopBottom,
              setRightBottom,
              initialTopBottom,
              initialRightBottom
            )
          }
          onMouseLeave={() =>
            handleMouseLeft(
              setTopBottom,
              setRightBottom,
              initialTopBottom,
              initialRightBottom
            )
          }
          className={styles.sign_circle}
        >
          <ScrollUp text="SIGN UP" />
          <div
            style={roundedClassBottom}
            className={`circle ${styles.circle_lower}`}
          ></div>
        </div>
      </div>

      <div className={styles.footer}>
        <h2>
          {" "}
          our <span>Road map</span>
        </h2>
        <ul>
          <li>Smart contract for job posting to be expected in Q1 2022.</li>
          <li>Our own decentralized exchange to be expected in Q2 2022.</li>
          <li>We will deploy our own NFT to be expected in Q1 2022.</li>
          <li>NFT market to be expected in Q1 2022.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
