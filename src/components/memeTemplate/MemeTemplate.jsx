import { useNavigate } from "react-router-dom";
import { Wrapper, Content, Template } from "./MemeTemplate.style";
import { useState, useEffect } from "react";
import axios from "axios";
const MemeTemplate = () => {
  const navigate = useNavigate();
  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    getMemes("https://api.imgflip.com/get_memes");
  }, []);

  const getMemes = async (url) => {
    try {
      const res = await axios.get(url);
      const memesData = await res.data.data.memes;
      setAllMemes(memesData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <h1>Select Your Meme Template</h1>
      <Content>
        {allMemes.length > 0 &&
          allMemes.map((meme) => {
            return (
              <Template key={meme.id}>
                {/* <div className="memeName">
                  <h4>{meme.name}</h4>
                </div> */}
                <div
                  className="imgWrapper"
                  onClick={() => navigate(`/meme/${meme.id}`, { state: meme })}
                >
                  <img src={meme.url} alt={meme.name} />
                </div>
              </Template>
            );
          })}
      </Content>
    </Wrapper>
  );
};

export default MemeTemplate;
