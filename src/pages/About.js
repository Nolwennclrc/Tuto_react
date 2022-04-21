import React, { useContext } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { UserContext } from "../context/UserContext";

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Logo />
      <Navigation />
      <div class="content">
        <h1>A propos</h1>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas ab
          necessitatibus debitis delectus, cupiditate reiciendis consectetur!
          Minima commodi libero alias vitae suscipit, excepturi repudiandae
          unde, inventore at veritatis hic quam nobis architecto reprehenderit
          nam quo natus atque quidem. Itaque architecto amet aliquid, iure,
          obcaecati laudantium nisi nulla praesentium velit pariatur iusto earum
          totam minima libero, dolorem facere quibusdam maxime commodi et rerum
          aperiam inventore quos. Reprehenderit molestias laboriosam voluptatem
          quod adipisci obcaecati. Incidunt explicabo earum tenetur sapiente,
          necessitatibus unde architecto porro nostrum velit? Officiis repellat
          nesciunt reprehenderit. Ducimus at molestiae ratione ab, quod
          accusamus amet dolor blanditiis eligendi impedit!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus
          aspernatur quo, earum incidunt ipsum, minus repellendus dolores
          provident laboriosam asperiores porro. Nam sed laboriosam neque fugiat
          aspernatur fugit necessitatibus ut ipsum esse pariatur delectus quae
          repellat, mollitia magnam aperiam impedit, explicabo adipisci tenetur!
          Eos odit incidunt reprehenderit ex explicabo molestias, libero error
          ratione suscipit similique? Quidem quam accusantium ex beatae in
          repellat sapiente architecto tempore fugiat asperiores unde veritatis
          corrupti, dolore dolorum ipsam molestiae laboriosam rerum recusandae
          eligendi deleniti itaque vero nesciunt eveniet. Expedita rerum
          blanditiis eveniet non laborum accusantium maxime unde, libero velit,
          porro minus, dolor dolorem voluptatibus sequi quidem cupiditate eaque
          odio laboriosam? Ratione in vitae harum? Laborum, reprehenderit.
          Deserunt eos iste molestias provident tempore fuga quae necessitatibus
          et aspernatur consequatur harum, veritatis sequi maiores sapiente
          numquam, quia aliquid hic placeat porro ipsum in nobis! Reprehenderit,
          nisi atque! Ut voluptates corporis deserunt ducimus veniam in nostrum
          placeat! Voluptatibus perferendis debitis earum, inventore voluptates
          illo ex quod iure adipisci hic. At nesciunt facilis fugiat, mollitia
          veniam quos eius quod rem nihil accusantium. Est, odio distinctio
          placeat expedita incidunt accusantium exercitationem vel accusamus
          modi ab voluptas at itaque et, asperiores earum illo id iusto
          temporibus cumque maxime quas eius!
        </p>
      </div>
    </div>
  );
};

export default About;
