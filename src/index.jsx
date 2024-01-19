import { useState } from "react";
import "@/assets/style/index.less";

function RenderComp(props) {
  const [name, setName] = useState("HyperPaas");
  
  return (
    <div className={ROOT_ELEMENT}>
      <h1>hello world!</h1>
      <p>{name}</p>
    </div>
  );
}

export default RenderComp;
