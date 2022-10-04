import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h1 className={css.section__title}>{title}</h1>
      {children}
    </section>
  );
};




Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Section;