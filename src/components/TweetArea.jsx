import Perfil from "../assets/perfil.png";
import React, { useState } from "react";
import "./styles/TweetArea.scss";
import { usePostTweet } from "../hooks/db/usePostTweet";
const TweetArea = () => {
  const [content, setContent] = useState("");
  const handlePostTweet = usePostTweet(content);
  return (
    <section className="TweetArea">
      <picture>
        <img src={Perfil} alt="" />
      </picture>
      <div className="Container_tweet-area">
        <textarea
          placeholder="Whats happening"
          maxLength={200}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <div style={{ width: `${content.length / 2}%` }}></div>
      </div>
      <div className="TweetInfo">
        <p className="Tweet_characteres">{content.length}</p>
        <p className="Tweet_maxlength">200 max.</p>
      </div>
      <button onClick={() => handlePostTweet()}>POST</button>
    </section>
  );
};

export { TweetArea };
