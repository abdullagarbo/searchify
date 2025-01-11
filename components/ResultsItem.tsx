import { Result } from '../types';

const searchLink = {
  fontSize: '12px',
  color: '#202124',
  display: 'block',
  marginBottom: '4px',
};

type ResultsItemProps = {
  result: Result;
};

function ResultsItem({ result }: ResultsItemProps) {
  const { link, title, description } = result;
  return (
    <li>
      <cite style={searchLink}>{link}</cite>
      <h3>
        <a href={link}>{title}</a>
      </h3>
      <p>{description}</p>
    </li>
  );
}

export default ResultsItem;
