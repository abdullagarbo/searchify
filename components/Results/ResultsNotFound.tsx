import React from 'react';

function ResultsNotFound({
  keyword,
  title,
  description,
}: {
  keyword?: string;
  title?: string;
  description: string;
}) {
  return (
    <div style={{ lineHeight: '2' }}>
      {title && (
        <p>
          {title} <strong>{`'${keyword}'`}</strong>
        </p>
      )}
      <p>
        Try looking for: <strong>{description}</strong>
      </p>
    </div>
  );
}

export default ResultsNotFound;
