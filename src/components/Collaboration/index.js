import poster from "../../assets/img/poster.png";

function Collaboration() {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Collaboration</h2>
      <span className='section__subtitle'>
        What I have done in Role Play for Usrah 2?
      </span>

      <div className='qualification__container container'>
        <div style={{ textAlign: "center" }}>
          <img
            src={poster}
            alt=''
            style={{
              maxHeight: "20rem",
            }}
          />
        </div>
        <p className='about__description'>
          <br />
          Assalammualaikum everyone. <br /> <br />I would like to share with you
          all about the task that I have done in Role Play Usrah 2. <br /> On
          the top I put the poster about 7 reasons why reading Qur'an is
          compulsory that my group and I created this semester. So as a muslim
          we have to recite Qur'an everyday in our daily life. The reasons when
          we recite Qur'an are, we will get multiple rewards from Allah SWT, By
          reciting Qur'an will make you closer to Allah SWT, as a guidance from
          Allah SWT, we also can learn the truth about islam, be amazed by all
          the scientific miracles, get help from Allah SWT on the Day of
          Judgment and remove the ilnesses from our hearts. <br />
          <br />
          Besides, to get this poster to be done. My group gave a good
          cooperation, we help each other, and we shared many info regarding to
          the title which is 7 reasons why reading Qur'an is compulsory. <br />{" "}
          <br />
          That all from me, Thank You 😊
        </p>
      </div>
    </section>
  );
}

export default Collaboration;
