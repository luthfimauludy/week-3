/* eslint-disable arrow-body-style */
import imgDetail from '../../static/images/img-detail.png';

import classes from './style.module.scss';

const Detail = () => {
  return (
    <div className={classes.container}>
      <section className={classes.sectionWrapper}>
        <div className={classes.headText}>
          <h1>Bersemayam di tanah Dewata</h1>
          <p>Fadhil</p>
        </div>
        <p className={classes.dateText}>17 October 2020</p>
        <div className={classes.boxDetail}>
          <img src={imgDetail} alt="Detail" />
          <div className={classes.textDetail}>
            <p className={classes.textIndent}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h1>Bersemayam di tanah Dewata Ke dua</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
