import React from 'react';
import PropTypes from 'prop-types';
import { enUS } from 'date-fns/locale';
import { formatWithOptions } from 'date-fns/fp';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import {
  wrapper,
  main,
  authorBlock,
  author,
  date,
  titleBlock,
  title,
  likeBlock,
  likeNumber,
  tag,
  description,
  tagBlock,
  authorBlockText,
  extendedWrapper,
  firstVisible,
  extended,
} from './article.module.scss';
import likeheartImg from '../../img/likeheart.svg';
import avatarImg from '../../img/avatar.png';

const formatDate = (dateObj) => formatWithOptions({ locale: enUS }, 'MMMM d, yyyy')(dateObj);

const Article = ({ id, isExtended }) => {
  const mainTagClasses = [wrapper];

  if (isExtended) {
    mainTagClasses.push(extendedWrapper);
  }

  return (
    <article className={mainTagClasses.join(' ')}>
      <section className={firstVisible}>
        <section className={main}>
          <div className={titleBlock}>
            <Link className={title} to={`/articles/${id}`}>
              Some article title
            </Link>
            <div className={likeBlock}>
              <img src={likeheartImg} alt="like" />
              <span className={likeNumber}>12</span>
            </div>
          </div>
          <div className={tagBlock}>
            <Tag className={tag}>Tag1</Tag>
            <Tag className={tag}>SomeTag</Tag>
          </div>
          <div className={description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </section>
        <section className={authorBlock}>
          <div className={authorBlockText}>
            <span className={author}>John Doe</span>
            <span className={date}>{formatDate(new Date())}</span>
          </div>
          <img src={avatarImg} alt="" width="46" height="46" />
        </section>
      </section>
      <section className={extended}>
        Est Ampyciden pater patent Amor saxa inpiger Lorem markdownum Stygias neque is referam fudi,
        breve per. Et Achaica tamen: nescia ista occupat, illum se ad potest humum et. Qua deos has
        fontibus Recens nec ferro responsaque dedere armenti opes momorderat pisce, vitataque et
        fugisse. Et iamque incipiens, qua huius suo omnes ne pendentia citus pedum. Quamvis pronuba
        Ulli labore facta. Io cervis non nosterque nullae, vides: aethere Delphice subit, tamen
        Romane ob cubilia Rhodopen calentes librata! Nihil populorum flava, inrita? Sit hic nunc,
        hoc formae Esse illo? Umeris eram similis, crudelem de est relicto ingemuit finiat Pelia uno
        cernunt Venus draconem, hic, Methymnaeae. 1. Clamoribus haesit tenentem iube Haec munera 2.
        Vincla venae 3. Paris includere etiam tamen 4. Superi te putria imagine Deianira 5. Tremore
        hoste Esse sed perstat capillis siqua
      </section>
    </article>
  );
};

Article.propTypes = {
  id: PropTypes.string.isRequired,
  isExtended: PropTypes.bool.isRequired,
};

export default Article;
