import { Result } from '../utils/types';

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
  const { id, url, title, description } = result;
  return (
    <li key={id}>
      <cite style={searchLink}>{url}</cite>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>{description}</p>
    </li>
  );
}

export default ResultsItem;
