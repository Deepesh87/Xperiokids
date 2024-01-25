import React from "react";
import Style from "./Landing.module.css";
import experiment from "../../assets/experiment.png";

function Landing() {
  return (
    <>
      <div className={Style.main}>
        <div className={Style.content}>
          <div>
            <h1>
              {" "}
              Unlocking the World of Science through <br /> Playful Exploration!
            </h1>
            <p>
              Get access to compact lessons from the experts and <br /> connect
              with a community of native speakers to help you <br /> master
              words faster.
            </p>
          </div>
          <button>Learn for free</button>
        </div>
        <div className={Style.experiment}>
          <img width={"100%"} height={"100%"} src={experiment} />
        </div>
      </div>
      <div className={Style.lorem}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        perspiciatis harum temporibus veniam eos impedit neque, debitis aperiam
        eaque repudiandae? Aut magnam exercitationem fugit natus, amet ullam
        accusantium nesciunt velit! Dignissimos molestiae iusto provident minus
        fugit tempore in repellendus commodi, accusantium sed, voluptate rerum
        rem quae saepe iste eum ab veniam quia neque, eveniet earum
        perspiciatis! Laborum consequatur delectus illo! Ut cumque ex atque
        dolorum consequatur! Excepturi laudantium in magni nulla tempora dolorem
        magnam atque vero, ut numquam repudiandae vel incidunt voluptatem iste
        error laboriosam voluptates obcaecati labore pariatur corporis. Quia
        magnam perspiciatis officia dolores rem aliquam harum cupiditate
        obcaecati suscipit sit tempore commodi blanditiis molestias quas
        molestiae iusto autem necessitatibus repudiandae, soluta expedita
        praesentium sed omnis? Atque, inventore rerum. Quaerat, recusandae earum
        ullam, illo voluptates eligendi quis laboriosam provident dolorem hic
        facere in tenetur explicabo, modi voluptate laborum sit accusamus
        voluptatibus porro dicta numquam eius incidunt? Corrupti, sequi animi.
        Repellat expedita autem error magnam dolorem laboriosam impedit?
        Consequuntur corrupti libero dolorem saepe eos commodi culpa pariatur id
        eius, nam possimus voluptatem unde esse adipisci nesciunt vero. Nulla,
        neque omnis? Eligendi labore reiciendis magni ullam voluptas iste quo
        dolorum aut? Itaque, quod totam magni quis deserunt mollitia
        praesentium? Fuga magni nisi quisquam animi voluptas nobis adipisci
        mollitia cum et aliquam? Tempore sed atque esse quod! Fugiat iure alias
        magnam, aperiam sapiente suscipit, dolor tenetur vel soluta enim
        possimus delectus deserunt debitis saepe hic totam. Culpa in rerum
        deserunt illum ipsam? Est, laudantium aspernatur perferendis dolorum
        error officia iure doloribus totam, voluptatem numquam amet. Asperiores
        sed nisi facere. Est, nobis. Aspernatur fuga fugiat odit nesciunt
        possimus nam, nihil corrupti deserunt similique. Distinctio tenetur,
        natus minima facilis fugiat laboriosam id, repellendus nostrum, omnis
        facere recusandae aperiam! Repellendus, non eius, tenetur culpa ducimus
        minima a facere maxime dolore esse numquam accusamus ipsum ex?
      </div>
    </>
  );
}

export default Landing;
