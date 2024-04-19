import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Button,
  ButtonsWrapper,
  Content,
  Form,
  Inputs,
  MemeImage,
  MemeWrapper,
  Wrapper,
} from "./Meme.style";
import axios from "axios";
import { useEffect } from "react";

const Meme = () => {
  const { id } = useParams();
  const [memeData, setMemeData] = useState({
    template_id: id,
    username: "MuhammadAqib01",
    password: "aqib@123",
    values: [],
  });
  const { state: data } = useLocation();
  const [allMemes, setAllMemes] = useState(data);
  let url = `https://api.imgflip.com/caption_image?template_id=${memeData.template_id}&username=${memeData.username}&password=${memeData.password}`;
  memeData.values.map(
    (items, index) => (url += `&boxes[${index}][text]=${items.text}`)
  );

  useEffect(() => {
    generateMeme();
  }, [memeData]);

  const generateMeme = async () => {
    try {
      const res = await axios.get(url, { method: "POST" });
      const data = await res.data;
      console.log(data, "data");

      setAllMemes({ ...allMemes, url: data.data.url });
    } catch (e) {
      console.log(e, "test");
    }
  };

  const inputs = [...Array(allMemes.box_count)].map((item, index) => {
    const handleChange = (e) => {
      let newValues = memeData.values;
      newValues[index] = { text: e.target.value };
      setMemeData((prevState) => {
        return {
          ...prevState,
          values: newValues,
        };
      });
    };
    return (
      <input
        key={index}
        name={`input${index}`}
        placeholder={`Text ${index + 1}`}
        onChange={handleChange}
        value={memeData.values.text}
      />
    );
  });

  const downloadImage = async (imageSrc) => {
    const image = await fetch(imageSrc);
    const imageBlob = await image.blob();
    const imageUrl = URL.createObjectURL(imageBlob);

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = allMemes.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Wrapper>
      <Content>
        <h4>{allMemes.name}</h4>
        <MemeWrapper>
          <MemeImage src={allMemes.url} alt="Generate Image" />
        </MemeWrapper>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Inputs className="inputs">{inputs}</Inputs>
          <ButtonsWrapper>
            <Button
              type="submit"
              onClick={() => window.open(allMemes.url, "_blank")}
            >
              Preview meme
            </Button>
            <Button type="submit" onClick={() => downloadImage(allMemes.url)}>
              Download Meme
            </Button>
          </ButtonsWrapper>
        </Form>
      </Content>
    </Wrapper>
  );
};
export default Meme;
