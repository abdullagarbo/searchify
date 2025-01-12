import { Result } from '@/utils/types';

const searchLink = {
  fontSize: '12px',
  color: '#202124',
  display: 'block',
  marginBottom: '4px',
};

function ResultsItem({
  result,
  preview,
}: {
  result: Result;
  preview: (id: number) => void;
}) {
  const { id, url, title, description } = result;
  return (
    <li key={id}>
      <cite style={searchLink}>{url}</cite>
      <h3>
        <a role='button' onClick={() => preview(id)}>
          {title}
        </a>
      </h3>
      <p>{description}</p>
    </li>
  );
}

export default ResultsItem;
